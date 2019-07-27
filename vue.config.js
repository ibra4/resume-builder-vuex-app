// module.exports = {
//     publicPath: ''
// }
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/resume-builder-vue-app/'
      : '/'
  }
//   module.exports = {
//     publicPath: ‘<my-first-project>’
//     } 