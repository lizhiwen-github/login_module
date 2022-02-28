<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-img-wrapper">
        <!-- 显示旋转的图片 -->
        <div class="login-img"></div>
      </div>
      <div class="login-form">
        <!-- 登录文字 -->
         <h3 style="color:red">忘记密码</h3>
        <!-- 表单区域 -->
        <el-form ref="loginRef" :model="loginFormData" label-width="200" :rules="loginRules">
          <el-form-item prop="username">
            <!-- 将用户名的输入框设置为只读 -->
            <el-input
              disabled
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
          <el-form-item prop="rePassword">
            <el-input
            placeholder="请再次输入密码"
            prefix-icon="el-icon-lock"
             v-model="loginFormData.rePassword">
            </el-input>
          </el-form-item>
          <!-- 记住密码的单选框 -->
          <el-form-item class="remePwd-checkBox">
             <el-checkbox v-model="remPwd">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="loginFun">确定</el-button>
            <el-button type="danger" class="reset-btn" @click="resetFun">重置</el-button>
          </el-form-item>
        </el-form>
        <!-- <router-link to="/register" class="routerLinnk-first">注册</router-link>
        <router-link to="/forgetPwd" class="routerLinnk-second">忘记密码</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPwd',
  data () {
    const checkPwd = (rule, value, cb) => {
      if (value !== this.loginFormData.password) {
        cb(new Error('两次密码输入不一致'))
      } else if (!value) {
        cb(new Error('请再次输入密码'))
      } else {
        cb()
      }
    }
    return {
      //* 表单组件的数据模型
      loginFormData: {
        // - 用户名
        username: '',
        // - 密码
        password: '',
        // - 再次输入密码
        rePassword: ''
      },
      // - 表单的验证规则
      loginRules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ],
        rePassword: [
          { validator: checkPwd, trigger: 'blur' }
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
  margin-top: 30px;
}
.remePwd-checkBox{
  text-align: left;
}
</style>
