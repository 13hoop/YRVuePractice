import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  methods: {
    addTodo: function () {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      console.log(this.todoList)
      this.newTodo = ''
    },
    remove: function(todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
    }
  },
  created: function() {
    window.onbeforeunload = () => {
      let dataStr = JSON.stringify(this.todoList)
      window.localStorage.setItem('todoList', dataStr)
    }
    let oldDataStr = window.localStorage.getItem('todoList')
    let oldData = JSON.parse(oldDataStr)
    this.todoList = oldData || []
  }
})