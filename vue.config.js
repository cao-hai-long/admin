const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  lintOnSave: false,

  //  webpack 配置（比如修改、增加Loader选项）(链式操作)
  
  chainWebpack:(config) => {
	  const svgRule = config.module.rule("svg");
	  svgRule.uses.clear();
	  svgRule.use("svg-sprite-loader").loader("svg-sprite-loader").options({
		  symbolId:"icon-[name]",
		  include:["./src/icons"]
	  })
  },
  
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
		  'vue':'vue/dist/vue.js' ,
          '@': path.resolve(__dirname, 'src'),
          '@a':path.resolve(__dirname,'./src/assets'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        } // 别名配置
      }
    })
  },
  // chainWebpack: (config) => {},
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  // css的处理
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: { prependData: `@import "./src/styles/main.scss";` },
    },
  },

  parallel: require("os").cpus().length > 1,
  pwa: {},

  devServer: {
    host: "0.0.0.0",
    public: "11.0.0.50:8080", //该网络地址为你联网的ip地址
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
          // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/  
          target: 'http://www.web-jshtml.cn/productapi/token', //api服务器地址 http://www.web.jshtml.cn/api
          // 允许跨域
          changeOrigin: true, 
          pathRewrite: {
              '^/api': ''
          }
      }
    },
  },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
};
