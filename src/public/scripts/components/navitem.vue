<template id="navitem">
    <div class="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
        <ul class="nav navbar-nav" >
            <li class="nav-item" v-for="list in list" :class="{active:list.id==1,selected:list.id==1}">
                <!-- active selected -->
                <a class="nav-link" :href="'#'+list.id" :data-no="list.id">{{ list.text }}</a>
                <!-- <router-link class="nav-link" to="/cdheroitems">{{ list.text }}</router-link> -->
            </li>   
        </ul>
    </div>  
</template>
<script>
    export default{
        template:'#navitem',
        props:['list']
    }
</script>