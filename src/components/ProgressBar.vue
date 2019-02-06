<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getProgress: function () {
      return {
        'width': ((this.progress > 100) ? 100 : this.progress) + '%'
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
  margin-top: 2em;
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
