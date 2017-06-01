import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
      selected: 'profile',
      resume: {
        config: [
          { field: 'profile', icon: 'id' },
          { field: 'workHistory', icon: 'work' },
          { field: 'education', icon: 'book' },
          { field: 'projects', icon: 'heart' },
          { field: 'awards', icon: 'cup' },
          { field: 'contacts', icon: 'phone' },
        ],
        profile: {
          name: 'Kobe',
          city: 'LA',
          title: 'Basketball palyer',
          birthday: '1996-1-1'
        },
        'workHistory': [
          { company: 'Lakers', content: 'LA Lakers, basketball team' },
          { company: 'Lakers', content: '我的第一份工作是' },
        ],
        education: [
          { school: '梅奥高中', content: '一个普通的高中'},
          { school: 'TX', content: '文字'},
        ],
        projects: [
          { name: 'project A', content: '文字'},
          { name: 'project B', content: '文字'},
        ],
        awards: [
          { name: 'award A', content: '文字'},
          { name: 'award A', content: '文字'}
        ],
        contacts: [
          { contact: 'phone', content: '12345678' },
          { contact: 'qq', content: '12345678' }
        ],
      }
    },
    mutations: {
        switchTab(state, payload) {
          state.selected = payload
        }
    }
})