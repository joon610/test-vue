<template lang="pug">
div
    styletest
    .kk(ref="test")
        h1 hello
    p hello world
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Style } from 'vue-corator';
import { CssStyle } from '../utils/StyleDeco';

@Component
export default class Test2 extends Vue {

    private test2comment: string = 'hello text1';
    private test2text: string = 'hello text2S';
    private helloday: string = 'gogogogo';

    private hello: string = 'p{ color:red}';

    @CssStyle()
    private test!: CSSStyleDeclaration;

    private methodTest2(message: string) {
        console.log('method' + message);
    }

    private mounted() {
        // console.dir(this.$refs.test);
        console.dir(this.test);
    }


    @Style()
    private styletest() {
      return 'p{ color:red } .kk { background: blue} ';
    }

}
</script>

<style scoped>

</style>
