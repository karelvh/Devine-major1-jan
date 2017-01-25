const path = require(`path`);

const webpack = require(`webpack`);
const {HotModuleReplacementPlugin} = webpack;
const {UglifyJsPlugin} = webpack.optimize;

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`);
const configHtmls = require(`webpack-config-htmls`)();

const extractCSS = new ExtractTextWebpackPlugin(`css/style.css`);
const BrowserSyncPlugin = require(`browser-sync-webpack-plugin`);

// change for production build on different server path
const publicPathRemote = `/karel.van.haeverbe1/major1/`;
const publicPathLocal = `/`;

const port = 3100;

// hard copy assets folder for:
// - srcset images (not loaded through html-loader )
// - json files (through fetch)
// - fonts via WebFontLoader

const copy = new CopyWebpackPlugin([{
  from: `./src/assets`,
  to: `assets`
}], {
  ignore: [ `.DS_Store` ]
});

const config = {

  // no HTML entry points for production build (bundled in JavaScript)
  entry: [
    require.resolve(`react-dev-utils/webpackHotDevClient`),
    `./src/css/style.css`,
    `./src/js/script.js`
  ],

  resolve: {
    // import files without extension import ... from './Test'
    extensions: [`.js`, `.jsx`, `.css`]
  },

  output: {
    path: path.join(__dirname, `dist`),
    filename: `js/[name].[hash].js`,
    // publicPath
  },

  devtool: `source-map`,

  devServer: {
    contentBase: `./src`,
    historyApiFallback: true, // for use with client side router
    hot: true,
    port
  },

  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          `style-loader`,
          {
            loader: `css-loader`,
            options: {
              importLoaders: 1
            }
          },
          {
            loader: `postcss-loader`
          }
        ]
      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [
            `audio:src`,
            `img:src`,
            `video:src`,
            `source:srcset`
          ] // read src from video, img & audio tag
        }
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp|wav)$/,
        loader: `url-loader`,
        options: {
          limit: 1000, // inline if < 1 kb
          context: `./src`,
          name: `[path][name].[ext]`
        }
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: `file-loader`,
        options: {
          context: `./src`,
          name: `[path][name].[ext]`
        }
      }
    ]

  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3100/ during development
        host: `localhost`,
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3000/)
        // through BrowserSync
        proxy: `http://localhost:3100/`
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  ]

};

if (process.env.NODE_ENV === `production`) {

  config.output.publicPath = publicPathRemote;

  //remove hot reloading client
  config.entry.shift();

  //remove CSS rule and add new one, css in external file
  config.module.rules.shift();
  config.module.rules.push({
    test: /\.css$/,
    loader: extractCSS.extract([
      {
        loader: `css-loader`,
        options: {
          importLoaders: 1
        }
      },
      {
        loader: `postcss-loader`
      }
    ])
  });

  //image optimizing
  config.module.rules.push({
    test: /\.(svg|png|jpe?g|gif)$/,
    loader: `image-webpack-loader`,
    enforce: `pre`
  });

  config.plugins = [
    extractCSS,
    copy,
    new UglifyJsPlugin({
      sourceMap: true, // false returns errors.. -p + plugin conflict
      comments: false
    })
  ];

} else {

  config.output.publicPath = publicPathLocal;

  // only include HTMLs in NODE_ENV=development
  // for Hot Reloading
  config.entry = [...config.entry, ...configHtmls.entry];

  config.performance = {
    hints: false
  };

}

config.plugins = [...config.plugins, ...configHtmls.plugins];

module.exports = config;
