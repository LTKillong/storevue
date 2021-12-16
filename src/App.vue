<template>
    <!--    头部-->
    <my-head></my-head>
    <!--    主要区域-->
    <Content></Content>
    <!--    底部-->
    <my-foot></my-foot>
</template>
<script>
import MyHead from "@/components/MyHead";
import MyFoot from "@/components/MyFoot";
import Content from "@/components/Content";


export default {
    components: {
        Content,
        MyFoot,
        MyHead,
    },
    setup() {

    },

}
</script>
<style>

</style>
