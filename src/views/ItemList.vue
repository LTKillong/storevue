<template>
    <ul>
        <li v-for="(item,index) in formData" :key="index">{{item}}</li>
    </ul>
</template>

<script>
// import {useRoute} from "vue-router";

export default {
    name: "ItemList",
    props:{
        formData:Object
    },
    // setup(){
    //     const route =useRoute();
    //     console.log(route.query.formData);
    //     return {
    //         route
    //     }
    // }
}
</script>

<style scoped>

</style>