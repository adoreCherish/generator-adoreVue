<template>
    <div id="knows">
       <input type="text" v-model="knowsContent" placeholder="请输入"/>
       <button class="btn btn-primary" @click="submitAction">提交</button>
       <input type="hidden" :value="$route.params.id">
    </div>
</template>
<script>
    export default{
        template:'#knows',
        data(){
            return {
                knowsContent:''
            }
        },
        methods:{
            /*
            点击提交按钮 传内容以及页面id给后台
             */
            submitAction(){
                var self = this;
                console.log('提交了:'+self.knowsContent);
                // console.log('页面id:'+);
                /*
                发送ajax请求
                 */
                // $.ajax({
                //     url:'/index/gitbranchConent',
                //     type:'POST',
                //     data:{
                //         knowsContent:self.knowsContent,
                //         id:$route.params.id
                //     }
                // }).then(function(data){
                //     console.log('data success:'+data);
                // },function(data){
                //     console.log('data error:'+data);
                // }).catch(function(e){
                //     console.log('catch error:'+e);
                // })
            }
        }
    }
</script>