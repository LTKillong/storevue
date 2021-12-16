<template>
    <div class="head">
        <img :src="require('../assets/lufi.png')" alt="" class="my-img" draggable="false">
        <ul class="nav-list">
            <li @click="showDialog('isShowLogin')">登录</li>
            <li @click="showDialog('isShowRegister')">注册</li>
            <li @click="showDialog('isShowAbout')">关于</li>
        </ul>
    </div>

    <Login v-model="isShowLogin" title="用户登录"></Login>
    <register v-model="isShowRegister" title="注册"></register>
    <About v-model="isShowAbout" title="关于"></About>
</template>

<script>

import Login from "@/components/Head/Login";
import {ref} from "vue";
import Register from "@/components/Head/Register";
import About from "@/components/Head/About";

export default {
    name: "MyHead",
    components: {About, Register, Login},
    setup() {
        //声明打开或关闭对话框
        const isShowLogin = ref(false);
        const isShowRegister = ref(false);
        const isShowAbout = ref(false);

        const showDialog = (params) => {
            console.log('showDialog:', params)
            eval(params).value = true;
        };

        return {
            isShowLogin,
            isShowRegister,
            isShowAbout,
            showDialog
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

li {
    cursor: pointer;
}

li:not(li:last-child):after {
    content: "|";
    margin: 0 10px;
    display: inline-block;
    color: #ccc;
}


</style>