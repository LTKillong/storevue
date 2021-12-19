<template>
<!--    <div>{{itemType}}</div>-->
    <ul class="list">
        <li v-for="(item) in mData" :key="item">
            <Item :item-data="item"></Item>
        </li>
    </ul>
</template>

<script>
// import * as Json from "@vue/compiler-sfc";
// import {computed} from "vue";

import axios from "axios";
import Item from "@/components/Content/Item";

export default {
    name: "ItemList",
    components: {Item},
    props: ['itemType'],
    data(){
        return{
            mData:null
        }
    },
    watch:{
        itemType:{
            immediate:true,
            handler(){
                this.PostData();
            }
        }
    },
    methods:{
        PostData(){
            const formData=new FormData();
            formData.append('itemtype',this.itemType);

            axios.
            post('http://localhost:8081/pmp/items/getitems',formData)
                .then((res)=>{
                    this.mData=res.data ;
                })
        }
    }

}
</script>

<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
}

li{
    margin: 10px;
}
</style>