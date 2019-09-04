<template lang="pug">
div
  good(:items="data" title="hello world")
  p nice
  test2
  P hello
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Render } from 'vue-corator';
import test2 from './test2.vue';
import { Super, Style } from '../utils/StyleDeco';

@Component
export default class TestPage extends test2 {

    private data: any = ['good', 'test'];

    @Super(test2)
    private super: any;

    private huhu: string = 'hax ';


    @Render()
    private good(items: any, title: any) {
      return  `
            <div>
             <b> {{ title }} </b>
              <ul>
                <li v-for="(item,index) in items" :key="index">
                      {{ item }}
                </li>
              </ul>
            </div>`;
    }

    private created() {
      // @ts-ignore
      this.test2comment = 'babababa';
    }
}
</script>

<style scoped>

</style>
