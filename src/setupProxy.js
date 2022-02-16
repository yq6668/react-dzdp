const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', { 
    target: 'http://localhost:3721/', 
    changeOrigin: true 
});

module.exports = function (app) {
    app.use(apiProxy);
};