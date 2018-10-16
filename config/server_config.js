
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    open : true,
    middleware: [
        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}

// CommonJS
// 其实暴露的是module.exports这是一个对象
module.exports = server_config