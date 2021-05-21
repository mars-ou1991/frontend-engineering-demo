module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
      path: __dirname + '/dist',
      filename: "[name].js"
  },
  resolve: {
    alias: {
      /**
       * 当使用 vue-loader 或 vueify 的时候，
       * *.vue 文件内部的模板会在构建时预编译成 JavaScript。
       * 你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
       * 我们没有使用 vue-loader 或 vueify 所以需要使用完整版（运行时 + 编译器）
       */
      //  'vue$': 'vue/dist/vue.runtime.esm.js',
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};