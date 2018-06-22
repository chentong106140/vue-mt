# vue-mt
vue模仿美团项目


安装vue-cli
cnpm install --global vue-cli

创建新项目
 vue init webpack  /如果没有创建项目目录 vue init webpack my-project

安装vuex
cnpm install vuex --save

安装muse-ui   https://muse-ui.org/#/zh-CN/usage
cnpm install muse-ui --save

 按需引入muse-ui，安装Less
cnpm i babel-plugin-import less less-loader -D

修改babelre文件，添加如下内容：
,
    ["import", {
    "libraryName": "muse-ui",
    "libraryDirectory": "lib",
    "camel2DashComponentName": false
  }]
  
修改index.html
      <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
      <meta content="yes" name="apple-mobile-web-app-capable">
      <meta content="black" name="apple-mobile-web-app-status-bar-style">
      <meta content="telephone=no" name="format-detection">
      <meta content="email=no" name="format-detection">
      
      
安装vant组件库
cnpm i vant -S

修改babelre文件，添加vant插件
["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
    
修改.postcssrc.js文件，添加配置
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {browsers: ['Android >= 4.0', 'iOS >= 7']},
    "postcss-pxtorem":{
      rootValue: 100,
      propList: ['*']
    }
  }
}

安装postcss-pxtorem插件
cnpm install --D postcss-pxtorem


安装jquery插件
cnpm install jquery --save

添加jquery配置
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
      
      
运行测试项目
cnpm run dev

打包
cnpm run build`****`

