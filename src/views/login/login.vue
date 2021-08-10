<template>
  <div id="login">
    <img class="login_bj" src="@a/login_bg2.png" />
    <div class="body_cont">
      <img src="@a/login.png" class="login" />
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        class="demo-ruleForm"
        size="small"
        :rules="rules"
      >
        <!-- <el-alert
          :closable="false"
          title="用户名密码错误,请重新登录!"
          :center="true"
          type="error"
        >
        </el-alert> -->
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="ruleForm.username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.password"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm()" class="block">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="copyright">版本号：DCBrain v0.1.11</div>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/login.js";
import { onMounted, reactive } from "@vue/composition-api";
import { stripscript } from "@/utils/verification.js";
export default {
  name: "login",
  setup(props, { root } ) {
    let userValidate = (rule, value, callback) => {
      // console.log('用户验证')
      callback();
    };
    // 密码验证
    let PassValidate = (rule, value, callback) => {
      // 过滤特殊符号
      // console.log(stripscript(value))
      // console.log('密码验证')
      callback();
    };
    const ruleForm = reactive({
      username: "",
      password: "",
    });
    const rules = reactive({
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { validator: userValidate, trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { validator: PassValidate, trigger: "blur" },
      ],
    });
    // 点击登录
    const submitForm = () => {
      // if(ruleForm.username == '' || ruleForm.password == ''){
      //   root.$message.error('请输入用户名密码')
      //   return false
      // }
      login({username:""}).then(response =>{

      }).catch(error =>{
        console.log(error)
      })
    };
    // 生命周期
    // 挂载完成
    onMounted(() => {
      
    });
    return {
      ruleForm,
      rules,
      submitForm,
    };
  },
};
</script>
<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login_bg.png") repeat-x;
  overflow: hidden;
  position: relative;
  background-size: 100%;
}
.login_bj {
  height: 60%;
  width: auto;
  position: absolute;
  top: 50%;
  right: 42%;
  transform: translateY(-50%);
}
.body_cont {
  width: 380px;
  background-color: rgba(041, 137, 198, 0.5);
  position: absolute;
  z-index: 2;
  top: 45%;
  right: 10%;
  text-align: center;
  display: block;
  outline: none;
  transform: translateY(-50%);
  padding: 0 48px;
  border-radius: 3px;
  .login {
    padding-top: 35px;
  }
  .copyright {
    font-size: 12px;
    color: #fff;
    padding-bottom: 22px;
  }
}
.demo-ruleForm {
  color: #fff;
  margin-top: 20px;
  .block {
    width: 100%;
    display: block;
  }
  .el-input__icon {
    font-size: 20px;
    color: #d4dfe6;
  }
}
::v-deep .el-input__inner {
  background: transparent !important;
  border: none;
  border-radius: 3px;
  border-bottom: 1px solid #fff;
  color: #fff;
}
::v-deep .el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 28px;
}
::v-deep .el-alert--error.is-light {
  margin-bottom: 15px;
}
::v-deep input::-webkit-input-placeholder {
  color: #fff;
}
::v-deep .el-input__inner:focus {
  border-bottom: 1px solid #1e6ea1 !important;
}
</style>