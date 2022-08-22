//前端开发
//1.模块化（js模块化，css模块化，资源模块化）
//2.组件化(复用现有UI)
//3.规范化（目录结构的规划，编码规范化，接口规范化，文档规范化，git分支管理）
//自动化（自动化构建，自动部署，自动化测试）

//前端工程化解决方案
//1.webpack parcel
//webpack 解决代码压缩混淆，处理六看起端js兼容性，性能优化

//npm init -y 创建package.json
//npm i -S/--save 明确记录到dependencies下面(默认也是dep)

//es6导入语法
import $ from 'jquery'

//定义jquery入口函数
$(function(){
    //实现奇偶换色
    $('li:odd').css('background-color','red');
    $('li:event').css('background-color','yellow');
})

//解决es6语法不能正常使用--->安装webpack
//npm i xxx -D   开发使用

//webpack打包 npm run dev

