// vue.config.js
module.exports = {
  devServer: {
	  proxy: 'https://localhost:8888',
  publicPath: '/vue-deploy/'
  }
}
