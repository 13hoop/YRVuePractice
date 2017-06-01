import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
      selected: 'profile',
      resume: {
        config: [
          { field: 'profile', icon: 'id' },
          { field: 'work history', icon: 'work' },
          { field: 'education', icon: 'book' },
          { field: 'projects', icon: 'heart' },
          { field: 'awards', icon: 'cup' },
          { field: 'contacts', icon: 'phone' },
        ],
        profile: {
          name: '',
          city: '',
          title: ''
        },
        'work history': [
          { company: 'AL', content: '我的第二份工作是' },
          { company: 'TX', content: '我的第一份工作是' },
        ],
        education: [
          { school: 'AL', content: '文字'},
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