import indexModel from '../model/indexModel';
const indexController = {
    index:()=>{
        return async(ctx, next) => {
            ctx.body = await ctx.render('./index');
        }
    },
    showList:()=>{
        return async(ctx, next) => {
            var iM = new indexModel();
            ctx.body = await iM.showLists();
        }
    },
    gitbranchContent:()=>{
        return async(ctx, next) => {
            var iM = new indexModel();
            ctx.body = await iM.gitbranch();
        }
    }
}
export default indexController;