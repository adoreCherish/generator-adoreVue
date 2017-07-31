const dev = require('./config/webpack.dev.js');
const prod = require('./config/webpack.prod.js');
console.log('当前模式:' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
    case 'development':
        module.exports = dev;
    case 'production':
        module.exports = prod;
    default:
        module.exports = dev;
}