<template>
  <div>
      <form @submit.prevent="signIn">
          <div class="row">
              <label>用户名</label>
              <input type="text" required v-model="formData.username">
          </div>
          <div class="row">
              <label>密码</label>
              <input type="password" required v-model="formData.pwd">
          </div>
          <div class="actions">
              <input type="submit" value="提交">
              <span>{{errorMsg}}</span>
          </div>
      </form>
  </div>
</template>

<script>
import AV, {getErrorMsg, getAVUser} from '../lib/leancloud'

export default {
    name: 'SignInForm',
    data() {
        return {
            formData: {
                username: '',
                pwd: ''
            },
            errorMsg: ''
        }
    },
    methods: {
        signIn() {
            let {username, pwd} = this.formData
            AV.User.logIn(username, pwd).then(()=> {
                // this.$store.commit('getState', getAVUser())
                this.$emit('success', getAVUser())
            }, (errorInfo) => {
                this.errorMsg = getErrorMsg(errorInfo)
            })
        }
    }

}
</script>
