<template lang="pug">
div
  .layout(ref="mainContainer")
    NavPage(:navWidth ="NAV_WIDTH" @isOpen="isOpen($event)")
  .main-view(:style='mainView')
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScreenInfo from './utils/Utils';
import NavPage from '@/views/NavPage.vue';
@Component({
  components: {
    NavPage,
  },
})
export default class App extends Vue {
  private NAV_WIDTH: number = 250;
  private sideNavWidth: string = '250px';
  private NavOpen!: boolean;

  private mainView = {
    width: '',
    left: '',
  };

  private mounted() {
      if (ScreenInfo.isMobile()) {
         this.closeNav();
      } else {
        this.openNav();
      }
  }

  private isOpen(event: boolean) {
    if (!event) {
      this.closeNav();
      } else {
      this.openNav();
    }
  }

  private openNav() {
    if (!ScreenInfo.isMobile()) {
      this.mainView.width =
        ((this.$refs.mainContainer as HTMLElement).clientWidth -
        this.NAV_WIDTH ) + 'px';
      this.mainView.left = this.NAV_WIDTH + 'px';
    }
  }

  private closeNav() {
    this.sideNavWidth = '0px';
    if (!ScreenInfo.isMobile()) {
      this.mainView.width =
        (this.$refs.mainContainer as HTMLElement).clientWidth + 'px';
      this.mainView.left = this.sideNavWidth;
    }
    this.mainView.width = '100%';
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background-color: #0f0f0f;
  z-index: 1;
}
.main-view {
  position: absolute;
  height: 100%;
  transition: 0.5s;
}
</style>

