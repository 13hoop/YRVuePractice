import Vue from 'vue';
import LocalStorage from './LocalStorage';

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  methods: {
    addTodo: function () {
      console.log(' - add - :' + this.ne)
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      this.newTodo = ''
    },
    remove: function(todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
      LocalStorage.save(this.todoList)
    }
  },
  created: function() {
    window.onbeforeunload = () => {
      console.log(' window onbeforeunloading ...')
      LocalStorage.save(this.todoList)
    }
    this.todoList = LocalStorage.fetch()
  }
})