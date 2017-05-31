<template>
  <div id="app">
    <h1>{{text}}</h1>
    <TopBar/>
    <Editor/>
    <Preview/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  data: function() {
    return {
      text: '你好'
    }
  },
  components: {TopBar, Editor, Preview}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
