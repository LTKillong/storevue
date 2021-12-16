<template>
    <el-dialog center :title="title" width="50%">
        <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            class="demo-ruleForm"
            label-width="120px"
            status-icon
        >

            <el-form-item label="密码" prop="pass">
                <el-input
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    type="password"
                >

                </el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    type="password"
                >

                </el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </el-dialog>


</template>

<script>
export default {
    name: "Register",
    props: ['title'],
    data() {

        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
            }
        }
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请确认密码'))
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入结果不一致"))
            } else {
                callback()
            }
        }
        return {
            visibility: true,
            ruleForm: {
                pass: '',
                checkPass: '',
            },
            rules: {
                pass: [{validator: validatePass, trigger: 'blur'}],
                checkPass: [{validator: validatePass2, trigger: 'blur'}]
            },
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('提交成功')
                } else {
                    console.log('提交错误')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
    }
}
</script>

<style scoped>

</style>