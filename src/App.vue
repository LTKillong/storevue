<template>
    <!--    头部-->
    <my-head></my-head>
<!--    Todo:content-->
<div style="width: 100px;height: 100px;"></div>
<!--    底部-->
    <my-foot></my-foot>
</template>
<script>
import MyHead from "@/components/MyHead";
import MyFoot from "@/components/MyFoot";

export default {
    data() {
        return {
            input: ''
        }
    },

    components: {
        MyFoot,
        MyHead,
    },
    methods: {
        click() {
            console.log(this.input);
        }
    },
    setup() {

    }

}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

</style>
