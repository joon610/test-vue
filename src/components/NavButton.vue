<template lang='pug'>
.button-margin
    template(v-if="isButton()")
        b-button.button-style(@click="router()")
            b-icon(size="is-medium" :style="{color:iconColor}" :icon="icon")
            span.text-style(:style="textStyle") {{text}}
    template(v-else)
        b-icon(size="is-medium" :style="{color:iconColor}" :icon="icon")
        span.text-style(:style="textStyle") {{text}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavButton extends Vue {
  @Prop(String) private text!: string;
  @Prop(String) private icon!: string;
  @Prop(String) private iconColor!: string;
  @Prop(String) private bgColor!: string;
  @Prop(String) private textColor!: string;
  @Prop(Boolean) private disabledButton!: boolean;
  @Prop(String) private fontSize!: string;
  @Prop(String) private color!: string;
  @Prop(String) private routerName!: string;

  private textStyle = {
    fontSize: '',
    color: ''
  };

  private created() {
    this.textStyle.fontSize = this.fontSize;
    this.textStyle.color = this.color;
  }

  private router() {
    const name = this.routerName === undefined ? '/' : this.routerName;
    this.$router.push(name);
  }

  private isButton(): boolean {
    const result = this.disabledButton === true ? false : true;
    return result;
  }

}
</script>

<style lang="scss" scoped>
b-icon {
  margin-left: 10px;
}
.button-margin {
  margin: 10px 0px 10px 30px;
}

.button-style {
  /* width: 100%; */
  height: 50px;
  width: 200px;
  background-color: #0f0f0f;
  text-align: left;
  justify-content: left;
  border: 0px;
}

.button-style:hover {
  background-color: #1f1f1f;
}
.button-style:focus {
  background-color: #141414;
  outline: none;
  border: none;
}
.button-style:active {
  outline: none;
  outline: none;
  box-shadow: none;
}

.text-style {
  color: rgb(187, 187, 187);
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  vertical-align: text-bottom;
  position: absolute;
  line-height: 1;
}
</style>