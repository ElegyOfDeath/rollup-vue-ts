<template>
  <div>
      {{txt}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Demo',
})
export default class SsBackTab extends Vue {
    txt="demo"
}
</script>

<style lang="scss" scoped>

</style>
