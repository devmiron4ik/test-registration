const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@use': path.resolve(__dirname, 'src/use'),
        '@scss': path.resolve(__dirname, 'src/scss'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import '@scss/_vars.scss';
          @import '@scss/_mixins.scss';
          @import '@scss/_functions.scss';
        `
      }
    }
  },
  productionSourceMap: false,
  publicPath: ''
}