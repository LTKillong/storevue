<template>
    <div class="head">
        <img :src="require('../assets/lufi.png')" alt="" class="my-img" draggable="false">
        <ul class="nav-list">
            <li @click="login()">登录</li>
            <li @click="register()">注册</li>
            <li @click="about()">关于</li>
        </ul>
    </div>


    <router-view>

    </router-view>

</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "MyHead",

    setup() {
        const router = useRouter();


        const login = () => {
            router.push({
                path: '/login',
                query: {}
            })
        };
        const register = () => {
            router.push({
                path: "/register",
                query: {
                    title: '这是title'
                }
            })
        };
        const about = () => {
            router.push({
                path: '/about',
                query: {}
            })
        };

        return {
            login,
            register,
            about
        }

    }
}
</script>

<style scoped>
.head {
    height: 100px;
    background-color: #f40;
    overflow: hidden;
}

.my-img {
    opacity: 0.5;
}

.nav-list {
    display: flex;
    flex-direction: row;
    color: #fff;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
}

.nav-list:after {
    content: "";
    display: block;
    clear: both;
}

li:not(li:last-child):after {
    content: "|";
    margin: 0 10px;
    display: inline-block;
    color: #ccc;
}


</style>