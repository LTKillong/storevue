<template>
    <div class="wrapper">
        <div class="left">

            <div class="l-top-box">
                <div class="box-title"><h4>全部产品</h4></div>
                <div class="box">
                    <h4>家用电器</h4>
                    <ul>
                        <li @click="clickRoute('smart')">穿戴智能设备 <span class="hot">HOT</span></li>
                        <li @click="clickRoute('work')">电脑办公设备</li>
                        <li @click="clickRoute('home')">家用日常设备</li>
                        <li>打印设备 <span class="hot">HOT</span></li>
                    </ul>
                </div>
            </div>

            <div class="l-center-box">
                <div class="box">
                    <h4>运动户外商品</h4>
                    <ul>
                        <li>男鞋</li>
                        <li>户外旅游装备 <span class="hot">HOT</span></li>
                        <li>运动服装 <span class="hot">HOT</span></li>
                        <li>帐篷</li>
                    </ul>
                </div>

            </div>

            <div class="l-bottom-box">
                <div class="box-title"><h4>热销产品</h4></div>
                <div class="box">
                    <ul>
                        <li>最新热销产品</li>
                        <li>最新热销产品</li>
                        <li>最新热销产品</li>
                        <li>最新热销产品</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="right">
            <router-view></router-view>
        </div>
    </div>


</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "Content",
    setup() {
        const router = useRouter();
        const clickRoute = (itemType) => {

            router.push({
                name: 'Items',
                params: {
                    itemType:itemType
                }
            })

        }

        return {
            clickRoute
        }
    }
}
</script>

<style scoped>

.wrapper {
    display: flex;
    flex-direction: row;
    height: 500px;
    margin-top: 10px;
}

.left {
    flex: 0.12;
    height: 500px;
}


.right {
    flex: 0.88;
    height: 500px;
    background-color: green;
}


.box-title {
    width: 200px;
    height: 30px;
    line-height: 30px;
    background-color: #f40;
}

.box-title h4 {
    font-size: 16px;
    margin-left: 10px;
    color: #fff;
}

.hot {
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    padding: 0 2px;
    background-color: #ffe797;
}

.box {
    width: 200px;
    height: 120px;
    background-color: #fff;
}

.box h4 {
    margin-left: 10px;
}

.box ul {
    padding: 10px 0 0 15px
}

.box ul li {
    cursor: pointer;
}


.l-top-box {
    margin: 0 20px 2px;
}


.l-center-box {
    margin: 0 20px 10px;
}

.l-bottom-box {
    margin: 0 20px 30px;
}


</style>