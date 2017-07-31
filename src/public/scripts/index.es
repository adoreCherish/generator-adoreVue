// import '../css/index.css';
import '../css/mainFirst.css';
import '../css/bootstrap.min.css';
import '../css/hero-slider-style.css';
import '../css/magnific-popup.css';
import '../css/templatemo-style.css';
import '../../views/index.html';
import '../img/tm-img-02-tn.jpg';
import '../img/tm-img-01-tn.jpg';
import '../img/tm-img-03-tn.jpg';
import '../img/tm-img-04-tn.jpg';
import Vue from 'vue';
import router from './router/router.es';
new Vue({
    el:'.cd-hero',
    router,
    data () {
        return {
          items:[],
          navitems:[{"text":1,"id":1},{"text":2,"id":2},{"text":3,"id":3},{"text":4,"id":4}]
        }
    },
    // components:{navitem,cdheroitems},
    mounted:function(){

        var self = this;
        $.ajax({
            type:'GET',
            url:'/index/cdHeroItems'
        })
        .then(function(data){
            console.log('success:'+data.data);
            // self.items = JSON.parse(data.data);
            self.items = data.data;
        })
       

    }
    
})