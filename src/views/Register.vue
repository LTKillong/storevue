<template>
    <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-width="120px"
        status-icon
    >
        <el-form-item label="Password" prop="pass">
            <el-input
                v-model="ruleForm.pass"
                autocomplete="off"
                type="password"
            ></el-input>
        </el-form-item>

        <el-form-item label="Confirm" prop="checkPass">
            <el-input
                v-model="ruleForm.checkPass"
                autocomplete="off"
                type="password"
            ></el-input>
        </el-form-item>


        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
            >提交
            </el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
export default {
    name: "Register",
    props:['title'],
    data() {

        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password'))
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
            }
        }
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password again'))
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("Two inputs don't match!"))
            } else {
                callback()
            }
        }
        return {
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
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
    },

    mounted() {
        console.log('@@@',this.title);
    }
}
</script>

<style scoped>

</style>