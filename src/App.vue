<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <el-button @click="click">
        按钮
    </el-button>
    <el-input v-model="input" placeholder="Please input password" show-password />
</template>
<script>
export default {
    data() {
        return{
            input:''
        }
    },
    methods:{
      click(){
          console.log(this.input);
      }
    },
    setup(){

    }

}
</script>
<style>

</style>
