<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-img-wrapper">
        <!-- 显示旋转的图片 -->
        <div class="login-img"></div>
      </div>
      <div class="login-form">
        <!-- 登录文字 -->
         <h3 style="color:red">注册</h3>
        <!-- 表单区域 -->
        <el-form ref="loginRef" :model="loginFormData" label-width="200" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
             placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="loginFormData.username"
              class="input-first"
              >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
             v-model="loginFormData.password">
            </el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="verificationCode">
             <el-input
             placeholder="请输入验证码"
              prefix-icon="el-icon-key"
              v-model="loginFormData.verificationCode"
              class="code-input"
              >
             </el-input>
             <img src="../assets/a.jpg" alt="验证码">
             <a href="#" id="code-link" style="marginLeft:10px">看不清</a>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="loginFun">注册</el-button>
            <el-button type="danger" class="reset-btn" @click="resetFun">重置</el-button>
          </el-form-item>
        </el-form>
        <router-link to="/login" class="routerLinnk-first">登录</router-link>
        <router-link to="/forgetPwd" class="routerLinnk-second">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      //* 表单组件的数据模型
      loginFormData: {
        // - 用户名
        username: '',
        // - 密码
        password: '',
        // - 验证码
        verificationCode: ''
      },
      // - 表单的验证规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      // - 记住密码的单选框的选中状态
      remPwd: false

    }
  },
  created () {

  },
  methods: {
    //* 点击重置按钮，响应该事件
    resetFun () {
      // -重置表单的输入的内容和验证结果
      this.$refs.loginRef.resetFields()
    },
    //* 点击登录按钮，响应该事件
    // TODO 点击的登录按钮，发送ajax请求，验证登录是否成功
    loginFun () {

    }

  }

}
</script>

<style lang="less" scoped>
  .login-wrapper {
    background-color: #2b4b6b;
    height: 100%;
    position: relative;
  }

  .login-content {
    width: 68%;
    height: 50%;
    // border: 1px solid red;
    margin: auto;
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    box-shadow: 0px 0px 10px rgba(0, 0,0, .3);

  }

  .login-img-wrapper {
    overflow: hidden;
    position: relative;
    width: 45%;
    height: 100%;
    background-color: #40AEB6;
  }

  .login-img {
    width: 90%;
    height: 90%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-image: url('../assets/login.png');
    animation: run 30s linear infinite;
  }

  @keyframes run {
    from {
      transform: rotateZ(0);

    }

    to {
      transform: rotateZ(360deg);
    }

  }
.login-form{
  width: 55%;
  height: 100%;
  background-color: #eee;
  // border: 1px red solid;

}
.el-form{
  width: 90%;
  height: 65%;
  // background-color: red;
  margin:30px auto 30px;
  // padding-top: 30px;
}
.reset-btn{
  margin-left: 130px !important;
}
.input-first{
  // margin-bottom: 16px;
  margin-top: 30px;
}
.routerLinnk-first{
  margin-right: 20px;
  text-decoration: none;
}
.routerLinnk-second{
  text-decoration: none;
}
.code-input{
  width: 60%;
  position: relative;
  top: -20px;
  left: -20px;
}
.code-link{
  height: 50px;
}
</style>
