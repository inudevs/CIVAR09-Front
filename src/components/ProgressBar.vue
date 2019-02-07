<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    minimal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getProgress: function () {
      return {
        'width': ((this.progress > 100) ? 100 : this.progress) + '%',
        'height': (this.minimal) ? '.8em' : '2em'
      }
    }
  }
}
</script>

<template>
  <div id="progress">
    <div v-bind:style="getProgress()"></div>
  </div>
</template>

<style scoped>
#progress {
  /* 상태 바 (바깥쪽) */
  background-color: #ffe589;
  width: 100%;
}
#progress > div {
  /* 상태 바 (안쪽) */
  background-color: #ffca12;
  width: 40%;
  height: 2em;
}
</style>
