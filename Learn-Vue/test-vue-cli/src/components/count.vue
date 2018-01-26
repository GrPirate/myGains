<template>
  <count>
    <div>{{count}}</div>
  </count>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      localCount:5
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.count + this.localCount
    }
  })
}
</script>
