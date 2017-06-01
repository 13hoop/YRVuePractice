<template>
  <div class="page">
    <header>
      <TopBar/>
    </header>
    <main>
      <Editor/>
      <Preview/>
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  data: function () {
    return {
      text: '你好'
    }
  },
  components: { TopBar, Editor, Preview }
}
</script>

<style lang='scss'>
.page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #EAEBEC;

  >main {
    flex-grow: 1;
  }
  >main {
  min-width: 1024px;
  max-width: 1440px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  align-self: center;
  }
}

#editor {
  width: 35%;
  background: #444;
}

#preview {
  flex-grow: 1;
  width: 61%;
  margin-left: 16px;
  background: #777;
}
</style>
