const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.cc0820.top:8888/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
