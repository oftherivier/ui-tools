const path = require('path')
const glob = require('glob/sync')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('@oftherivier/tools/webpack')

module.exports = (overrides = {}) =>
  base([
    {
      devServer: {
        hot: true,
        port: 9000
      },
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      module: {
        rules: {
          scss: {
            test: /.scss$/,
            use: ['style-loader', 'sass-loader']
          }
        }
      },
      resolve: {
        alias: {
          [process.env.OTR_PKG_NAME]: './src/js'
        }
      }
    },
    glob('./**/*.page.js').map(pageConf),
    overrides
  ])

function pageConf(filepath) {
  return ({ append, env }) => ({
    entry: {
      [filepath]: [path.join(__dirname, 'render.js'), filepath]
    },
    plugins: append([
      new HtmlWebpackPlugin({
        filename: path.join(path.dirname(filepath), 'index.html'),
        title: filepath,
        chunks: [filepath],
        templateContent: ({ htmlWebpackPlugin: { tags } }) => `
          <html>
            <head>
              ${tags.headTags}
            </head>
            <body>
              <div id="mountpoint"></div>
              <script src="/node_modules/react/umd/react.${env}.js"></script>
              <script src="/node_modules/react-dom/umd/react-dom.${env}.js"></script>
              ${tags.bodyTags}
            </body>
          </html>
      `
      })
    ])
  })
}
