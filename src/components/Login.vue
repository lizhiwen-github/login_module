<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-img-wrapper">
        <!-- 显示旋转的图片 -->
        <div class="login-img"></div>
      </div>
      <div class="login-form">
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
          <el-form-item>
            <el-button type="success">登录</el-button>
            <el-button type="danger" class="reset-btn">重置</el-button>
          </el-form-item>
        </el-form>
        <router-link to="" class="routerLinnk-first">注册</router-link>
        <router-link to="" class="routerLinnk-second">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //* 表单组件的数据模型
      loginFormData: {
        // - 用户名
        username: '',
        // - 密码
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ]
      }

    }
  },
  created () {

  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    }
  }

}
</script>

<style lang="less" scoped>
  .login-wrapper {
    background-color: #E2E2E2;
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
  background-color: #F0F7F0;
  // border: 1px red solid;

}
.el-form{
  width: 90%;
  height: 60%;
  // background-color: red;
  margin:66px auto;
  // padding-top: 30px;
}
.reset-btn{
  margin-left: 130px !important;
}
.input-first{
  margin-bottom: 16px;
  margin-top: 60px;
}
.routerLinnk-first{
  margin-right: 20px;
  text-decoration: none;
}
.routerLinnk-second{
  text-decoration: none;
}

</style>
