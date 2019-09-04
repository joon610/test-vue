<template lang='pug'>
div
    #mySidenav.sidenav(ref="nav" :style="{width:sideNavWidth}")
      br
      br
      NavButton(text="カレンダー" fontSize="25px" iconColor="#508fd6" icon="calendar" routerName="calendar")
      NavButton(text="スケジュール" fontSize="25px" iconColor="#d65050" icon="clock" )
      NavButton(text="記錄リスト" fontSize="25px" iconColor="#50d671" icon="view-list"  routerName="TestPage")
    .side-container(:style="{left:sideNavWidth}")
      .side-bar(@click="sideBarToggle()")
        #icon-bar
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';
import ScreenInfo from '../utils/Utils';

@Component({
  components: {
    NavButton,
  },
})
export default class NavPage extends Vue {

  @Prop(Number)
  private navWidth!: number;
  private sideNavWidth: string = this.navWidth + 'px';

  private mounted() {
    if (ScreenInfo.isMobile()) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  private sideBarToggle() {
    if (this.sideNavWidth === this.navWidth + 'px') {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  private openNav() {
    this.sideNavWidth = this.navWidth + 'px';
    this.$emit('isOpen', true);
  }

  private closeNav() {
    this.sideNavWidth = '0px';
    this.$emit('isOpen', false);
  }


}
</script>

<style lang="scss" scoped>
$sideIconBarColor:rgb(100, 100, 100);
$sideNavBackground :rgb(14, 14, 14);

.button-style{
  margin: 10px 0px 10px 30px;
}
.side-bar {
  top: 50%;
  width: 50px;
  position: absolute;
  cursor: pointer;
  margin-left: 5px;
}

.button-size {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  justify-content: left;
  color: white;
}

.side-container {
  position: absolute;
  height: 100%;
  transition: 0.5s;
  z-index: 100;
}

.sidenav {
  height: 100%;
  position: fixed;
  background-color: $sideNavBackground;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  z-index: 100;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  width: 300px;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

#icon-bar {
  width: 10px;
  height: 150px;
  margin-top: -150px;
  margin-left: 5px;
  background: $sideIconBarColor;
  border-radius: 5px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
