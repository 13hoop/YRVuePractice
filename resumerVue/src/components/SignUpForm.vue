<template>
  <div>
      <form @submit.prevent="signUp">
          <div class="row">
              <label>用户名</label>
              <input type="text" v-model="formData.username" required>
          </div>
          <div class="row">
              <label>密码</label>
              <input type="text" v-model="formData.pwd" required>
          </div>
          <div class="row">
              <input type="submit" value="提交">
              <span class="errorMsg">{{errorMsg}}</span>
          </div>
      </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import {getErrorMsg, getAVUser} from '../lib/leancloud'
export default {
  name: 'SignUpForm',
  data() {
      return {
          formData: {
              username: '',
              pwd: ''
          },
          errorMsg: ''
      }
  },
  created() {
      
  },
  methods: {
      signUp() {
        let {username, pwd} = this.formData
        var user = new AV.User()
        user.setUsername(username)
        user.setPassword(pwd)
        user.signUp().then((resData) => {
            this.$emit('success', getAVUser())
        }, (errorInfo) => {
            console.log( JSON.stringify() )
            this.getErrorMsg = getErrorMsg(errorInfo)
        })
      }
  }
}
</script>


<style lang="scss">
.row {
    padding: 10px;
}
</style>
