module.exports = {
    distDir: 'build',
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' }
        }
      }
  }