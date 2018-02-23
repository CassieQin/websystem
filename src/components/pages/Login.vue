<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <div prop="username">
                <input placeholder="username" />
            </div>
            <div prop="password" class="mt20">
                <input type="password" placeholder="password" />
            </div>
            <div class="login-btn mt20">
                <button type="primary" @click="submitForm">登录</button>
            </div>
            <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$router.push('/Homepage');
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background: #324157;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .ms-login input{
        width: calc(100% - 22px);
        width: -moz-calc(100% - 22px);
        width: -webkit-calc(100% - 22px);
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
    }
    .login-btn button{
        width:100%;
        height:36px;
        background: #1ab394;
        text-align: center;
        border: 1px solid #1ab394;
        cursor: pointer;
        color: #fff;
    }
</style>