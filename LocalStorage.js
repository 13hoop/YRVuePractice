let STORAGE_KEY = 'todoList'
var LocalStorage = {
    fetch: function() {
    	return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || []
    },
    save: function(data) {
      let dataStr = JSON.stringify(data)
      window.localStorage.setItem(STORAGE_KEY, dataStr)
    }
}

export default LocalStorage