<template id="cdhero-items">
    <div>
        <div class="grid-item" v-for="item in list">
            <figure class="effect-sadie">
                <img :src="item.url" alt="Image" class="img-fluid tm-img">
                <figcaption>
                    <h2 class="tm-figure-title">Project <span><strong>{{ item.id }}</strong></span></h2>
                    <p class="tm-figure-description">{{ item.description }}</p>
                    <!-- <a href="img/tm-img-04.jpg">View more</a> -->
                    <!-- <router-link to="/gitbranch"></router-link> -->
                    <router-link :to="{ name: 'gitbranch', params: { id: item.id }}"></router-link>
                </figcaption>           
            </figure>
        </div>
    </div>
</template>
<script>
export default {
  template:'#cdhero-items',
  props:['list'],
}
</script>
