const base = require('@oftherivier/tools/webpack')

module.exports = (overrides = {}) =>
  base([
    {
      devServer: {
        hot: true,
        port: 9000
      },
      module: {
        rules: {
          scss: {
            test: /.scss$/,
            use: ['style-loader', 'sass-loader']
          }
        }
      }
    },
    overrides
  ])
