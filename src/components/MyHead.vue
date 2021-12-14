<template>
    <div class="head">
        <img :src="require('../assets/lufi.png')" class="my-img" alt="" draggable="false" oncontextmenu="false">
        <ul class="nav-list">
            <li @click="login">登录</li>
            <li @click="register">注册</li>
            <li @click="about">关于</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyHead",

    setup() {
        const login = () => {
            console.log('login')
        };
        const register = () => {
            console.log('register')
        };
        const about = () => {
            console.log('about')
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