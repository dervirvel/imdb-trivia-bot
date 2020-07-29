// vue.config.js
module.exports = {
  devServer: {
	  proxy: 'https://localhost:8888',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/imdb-trivia-bot/'
    : '/'
  }
}
