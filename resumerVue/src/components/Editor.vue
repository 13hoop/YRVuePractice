<template>
  <div id="editor">
    <nav>
      <ol>
        <li class="active">x</li>
        <li v-for="(item, index) in resume.visibleItems" 
            :class="{active: item === selected}"
            @click="selected = item">
            {{index}}
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.visibleItems" v-show="item === selected">
        {{resume[item]}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data() {
    return {
      selected: 'bio',
      resume: {
        visibleItems: ['bio', 'work history', 'education', 'projects', 'awards', 'contacts', 'other'],
        bio: {
          name: '',
          city: '',
          title: ''
        },
        'work history': [],
        education: [],
        projects: [],
        awards: [],
        contacts: [],
        other: []
      }

    }
  }
}
</script>

<style lang="scss">
#editor {
  background: lightblue;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  overflow: auto;

  >nav {
    width: 80px;
    background: black;
    color: white;

    > ol {
      > li {
        height:  48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;

        &.active {
          background: white;
          color: black;
        }
      }
    }
  }
}
ol {
  list-style: none;
}
</style>
