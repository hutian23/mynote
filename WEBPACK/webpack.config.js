//使用node语法需要导入
const path=require('path')
//使用node.js种的到处语法,向外导出一个webpack配置对象
module.exports={
    //代表webpack开发模式， development和production
    //开发的时候用development，上线production
    mode:'production',
    //指定要处理那个文件
    entry:path.join(__dirname,'./src/index123.js'),
    //指定生成的文件存放的位置
    output:{
        //指定存放的目录
        path:path.join(__dirname,'dist'),
        //生成的文件名
        filename:'bundle.js'
    }
}

/*package.json script节点下的脚本，通过npm run dev可执行*/
//npm run dev 运行时会读取webpack配置文件
//webpack默认约定
//默认打包文件 src->index.js
//默认输出文件路径 dist->main.js
//可以在webpack.config.js中修改打包的默认约定
//通过entry节点指定打包的入口。通过output节点指定打包出口

//webpack-dev-server 监听源代码的变化，自动化进行项目的打包和构建
//npm install webpack-dev-server@3.11.2 -D 调试工具

// 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。

//webpack-serve http://localhost:8080 自动打包