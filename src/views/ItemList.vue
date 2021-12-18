<template>
<!--    <div>{{id}}</div>-->
    <ul>
        <li v-for="(item) in $route.params.smart" :key="item.id">{{ item }}</li>
    </ul>
</template>

<script>
 //import {useRoute} from "vue-router";

export default {
    name: "ItemList",

    // setup(){
    //     const route =useRoute();
    //     console.log(route);
    //     return {
    //         route
    //     }
    // }
    mounted() {
        console.log(this.$route.params.smart)
    }
}
</script>

<style scoped>

</style>