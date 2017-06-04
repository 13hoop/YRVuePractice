<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">
        resumer
      </span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a href="#" class="button" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a href="#" class="button primary" @click.prevent="showSignUpDialog = true">注册</a>
          <a href="#" class="button" @click.prevent="showSignInDialog = true">登陆</a>
        </div>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
    <MyDialog title="注册" :visible="showSignUpDialog" @close="showSignUpDialog = false">
      <SignUpForm @success="signIn($event)" />
    </MyDialog>
    <MyDialog title="登陆" :visible="showSignInDialog" @close="showSignInDialog = false">
      <SignInForm @success="signIn($event)"></SignInForm>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  name: 'TopBar',
  data() {
    return {
      showSignUpDialog: false,
      showSignInDialog: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    logined() {
      return this.user.id
    }
  },
  components: {
    MyDialog, SignUpForm, SignInForm
  },
  methods: {
    signOut() {
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user) {
      this.showSignUpDialog = false
      this.showSignInDialog = false
      this.$store.commit('setUser', user)
    }
  }

}
</script>

<style scoped lang="scss">
#topbar {
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);

  >.wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 64px;
    min-width: 1024px;
    max-width: 1440px;
  }

  >.logo {
    font-size: 24px;
    color: #000000;
  }
}

.button {
  width: 72px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  background: #ddd;
  color: #222;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &.hover {
    box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.5)
  }

  &.primary {
    background: #02af5f;
    color: white;
  }

  .actions {
    display: flex;
    .userActions {
      margin-right: 3em;
      .welcome {
        margin-left: 0.5em;
      }
    }
  }
}
</style>
