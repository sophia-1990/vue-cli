module.exports={
    publicPath:'/', //配置根目录
    outputDir:'dist', //构建输出目录
    assetsDir:'assets', //静态资源目录（js,css,image）
    lintOnSave:false,  //是否开启eslint检测
    productionSourceMap:false, //生产环境开启断点调试
    //服务器配置
    devServer:{
        open:false, //是否自动开启浏览器
        host:'localhost', //主机 支持局域网地址 0.0.0.0
        port:8080, //端口
        https:false, //是否开启https
        //配置跨域代理：
        proxy:{
            "/api":{
                target:'http://vueshop.glbuys.com/api',
                changeOrigin: true,
                pathRewrite:{
                   '/^api/':''
                }
            }
        }
    },
    //开启开发环境断点调试
    configureWebpack:{
        devtool:'source-map'
    }
}