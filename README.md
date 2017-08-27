网易云课堂--React Native 零基础入门到项目实战--易荟云
一、Atom下载链接
https://atom.io/

二、Atom插件
https://atom.io/packages

常用插件：
浏览器浏览功能 open-in-browser（可以设置快捷键）
分页展示html页面效果 atom-html-preview（可以设置快捷键）
文件路径补全 autocomplete-path

安装方法：
ctrl+逗号,
install

三、React 官网：
https://facebook.github.io/react/

四、browser.min.js文件链接
https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js

网易云课堂--React系列教学--智能社

一、react、react-dom获取
原先：
  官网下载
后来：
  npm下载
  import React from 'react'
  import ReactDOM from 'react-dom'

二、新建class：
原先：
var WebName = React.createClass({
  render: function() {
    return <h1>百度</h1>;
  }
});
后来：
class WebName extends React.Component {
  render() {
    return <h1>百度</h1>;
  }
}

三、state:
原先：
getInitialState: function() {
  return {
    value: "请输入"
  }
}
后来：
constructor(...args) {
  super(...args); // 超类、父类构造函数
  this.state={value: ''};
}
注意：在constructor中必须有super();
     设置this.state时，在constructor中可以写this.state
     但在其他方法中，要写this.setState({xxx:xxx});

四、绑定事件：
原先：
onChange={this.handleChange}
后来：
onChange={this.handleChange.bind(this)}

WebPack
1.下载webpack工具
  npm install -g webpack              #webpack的cli环境
  npm install -g webpack-dev-server   #webpack自带的服务器

2.各种依赖库
  #babel相关库
  npm install babel-core -D           #后台编译babel工具
  npm install babel-preset-es2015 -D  #babel对ES2015的预设
  npm install babel-loader -D         #babel加载器

  #webpack本身
  npm install webpack -D              #webpack本地依赖库
  npm install webpack-dev-server -D   #webpack服务器的本地依赖

  npm install babel-preset-react -D   #babel-react预设

  npm install react -D                #react本身
  npm install react-dom -D            #react-dom本身
  npm install react-hot-loader -D     #热更新

  npm install style-loader -D
  npm install css-loader -D

3.webpack的配置文件
  webpack.config.js                   #webpack的配置文件
  .babelrc                            #barbel预设文件

webpack
webpack-dev-server --hot              #实时编译，实时更新
