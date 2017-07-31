import indexController from './indexController';
const initController = {
    init:(app,router)=>{
        app.use(router(_ => {
          _.get('/index', indexController.index())
          _.get('/index/cdHeroItems',indexController.showList() )
          _.get('/index/gitbranchConent',indexController.gitbranchContent())
        }))
    }
}
export default initController;
