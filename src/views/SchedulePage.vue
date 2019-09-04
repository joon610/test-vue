<template lang="pug">
.container-margin
    Schedule(ref="test")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Schedule from '@/components/Schedule.vue';
import { Render } from '../utils/StyleDeco';
@Component( {
    components: {
        Schedule
    }
})
export default class SchedulePage extends Vue {
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 425px){
  .container-margin{
      margin: 10px 10px 10px 10px;
  }
}
@media screen and (min-width: 425px){
  .container-margin{
      margin: 30px 30px 30px 30px;
  }
}
</style>
