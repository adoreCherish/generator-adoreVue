const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const co = require('co');
const render = require('koa-swig');
const path = require('path');
const serve = require('koa-static');
import babel_co from 'babel-core';
import babel_polyfill from 'babel-polyfill';
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
app.use(serve(path.join(__dirname)));
import initController from './controller/initController'; 
initController.init(app,router);
app.listen(3000,function(){
    console.log('is running');
});
export default app;