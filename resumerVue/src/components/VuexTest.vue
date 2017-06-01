<template>
  <div class="VuexTest">
    <H1>{{title}}</H1>
    <p>{{ count }}</p>
    <button @click="increment">+1s</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'VuexTest',
  data () {
    // state
    return {
      title: "VuexTest here",
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.VuexTest {
  background: lightblue;
  > button {
    width: 30px;
    height: 20px;
  }
}
</style>

