<template>
    <el-dialog center :title="title" width="50%">
        <el-form>
            <el-form-item>
                <el-input v-model="username" clearable placeholder="请输入账户名"/>
            </el-form-item>

            <el-form-item>
                <el-input v-model="password" placeholder="请输入密码" show-password/>
            </el-form-item>

            <el-form-item>
                <el-button>登录</el-button>
            </el-form-item>

        </el-form>
    </el-dialog>
</template>

<script>
import {ref} from "vue";

export default {
    name: "Login",
    props: ['title'],
    setup() {

        return {
            username: ref(''),
            password: ref(''),

        }
    }
}
</script>

<style scoped>

</style>