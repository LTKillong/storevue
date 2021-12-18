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
                        <li>家用日常设备</li>
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

        const smart = `[
            {
                "id": "1",
                "name": "智能手表1",
                "desc": "智能手表描述1",
                "imgUrl": "../assets/images/yangmi.jpg"
            },
            {
                "id": "2",
                "name": "智能手表2",
                "desc": "智能手表描述2",
                "imgUrl": "../assets/images/yangmi.jpg"
            },
            {
                "id": "3",
                "name": "智能手表3",
                "desc": "智能手表描述3",
                "imgUrl": "../assets/images/yangmi.jpg"
            },
            {
                "id": "4",
                "name": "智能手表4",
                "desc": "智能手表描述4",
                "imgUrl": "../assets/images/yangmi.jpg"
            }]`

        const work = {
            0: {
                id: 11, name: '智能手表11', desc: '智能手表是描述11', imgUrl: '../assets/images/yangmi.jpg',
            },
            1: {
                id: 12, name: '智能手表12', desc: '智能手表是描述12', imgUrl: '../assets/images/yangmi.jpg',
            },
            2: {
                id: 13, name: '智能手表13', desc: '智能手表是描述13', imgUrl: '../assets/images/yangmi.jpg',
            },
            3: {
                id: 14, name: '智能手表14', desc: '智能手表是描述14', imgUrl: '../assets/images/yangmi.jpg',
            }
        }


        const router = useRouter();
        const clickRoute = () => {
            router.push({
                name: 'Items',
                params: {
                    smart
                }
            })
        }

        return {
            clickRoute,
            smart,
            work
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