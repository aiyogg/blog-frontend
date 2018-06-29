## 个人博客前端代码仓库

### 项目介绍
本仓库是[个人博客](https:blog.chenteng.me)前端源码的备份,用于构建博客的前端代码   
整个项目脚手架由Vue官方的 [`vue-cli`](https://github.com/vuejs/vue-cli) 工具生成(webpack版)，极大简化了项目搭建过程  
提供一般博客系统常见的功能，包括主页、我的博客（个人简介、文章列表、标签、归档、文章详细、文章评论）、音乐播放器、背景切换、后台管理（访问看板，个人资料修改、标签管理、文章管理、评论管理）

### 项目目录结构
```bash
├─build                     // webpack配置文件
├─config                    // 环境配置
├─dist                      // build生成文件
├─src                       // 开发目录
│  ├─api                    // 后台借口调用
|  ├─assets                 // 资源
|  ├─components             // 公共组件
|  ├─plugin                 // 一些定制化的插件
|  ├─theme                  // 公共样式文件,相当于主题
|  ├─utils                  // filter等工具组件
|  ├─views                  // 整个页面组件集合
│  ├─vuex                   // vuex全局状态管理
│  ├─App.vue                // 根组件，初始化配置
│  ├─config.js              // 线上配置，api url等信息
│  ├─main.js                // 组件挂载，入口文件
|  └─router.js              // 路由配置
├─static
└─test
```

### 项目安装
```bash
npm install                 # 安装依赖
npm run dev                 # 开发环境调试，启用了热重载，可在 config/index.js 中配置端口
npm run build               # 构建项目代码，用于正式环境发布
```

### 调试与部署上线
在构建前端项目之前，需要在`src/config.js`中配置后台 api 的 url 以及通过后台借口返回的个人信息。关于后端的一些列安装配置见[后台项目](https://github.com/DOTA2mm/blog-backend)中的介绍  
部署上线之前可以在本地启动项目，调用线上接口看功能是否正常  
然后将build后生成在`dist`目录下的静态资源放入[后台项目](https://github.com/DOTA2mm/blog-backend)的`public`目录下，并建好`uploads`目录存放上传的图片文件  
如果后端项目配置无误，即可将后端项目放到服务器，生成并启动项目完成项目的部署。  

### 注意点
- 我们在`build/webpack.base.conf.js`中配置别名(alias):
  ```js
  alias: {
    "jquery": path.resolve(__dirname, '../node_modules/jquery/dist/jquery.slim.min.js'),//插件位置
    "bootstrap": path.resolve(__dirname, '../src/plugin/bootstrap')
  }
  ```
  这样在引入(`import`)的时候就可以使用别名而不用写很长的路径：`import "bootstrap/js/tooltip.js";`
- 在`build/webpack.base.conf.js`中配置`plugins`使 jQuery 全项目可以：
  ```js
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
    })
  ]
  ```
  在 Vue 组件中就可以直接使用 `$`
- 使用 `vuex` 一定要是 `commit` `mutation` 而不是直接操作 `state`
- 父子组件通信应该注意其单向数据流概念，子组件不应该修改父组件的状态，参考：[Vue2中，父子组件通信](http://blog.chenteng.me/article/58f4eef77beb540f3006340e)