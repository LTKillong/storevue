<template>
    <div class="item-wrapper">
        <div class="left"><img :src="itemData.imgurl" alt=""></div>
        <div class="right">
            <h3>{{itemData.name}}</h3>
            <div class="desc">{{itemData.itemdesc}}</div>
            <el-button>立即购买</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props:['itemData'],

}
</script>

<style scoped>
.item-wrapper{
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}
.left{
    margin: auto 0 auto 0;
}
.left img{
    width: 100px;
    height: 80px;
}
.right{
    margin:auto 0 auto 0;
}
</style>