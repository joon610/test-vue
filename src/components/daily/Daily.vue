<template lang="pug">
.container
    .daily
        .days 18
        .top-line Tomorrow
    .lesson-container(class="tile " style="margin:10px")
        .lesson
            | 19:00 ~ 19:30  Ayako 
        .title(class="tile is-8")
            b-tag hello
            b-tag hello
            b-tag hello
            b-tag hello
            b-tag hello
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Daily extends Vue {

    private test = 1;

    private mounted() {
        console.log('mounted');
        console.log(this.$vnode.key);
    }

}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

$dailyFontSize: 3.0rem;
$weeksFontSize:1.8rem;
$lessonFontSize:1.2rem;


.tag{
    margin-right: 5px;
}
.lesson-container{
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(39, 39, 39);

}

.lesson {
    color:white;    
    font-size: $lessonFontSize;
    display: flex;
    width: 250px;
    // margin-right: 20px;

}

.daily {
    margin: 0 auto;
    position: relative;
    display: flex;
}

.days{
    font-family:'Days One', sans-serif;
    font-size: $dailyFontSize;
    color: white;
    width: fit-content;
    height: 0px;
}

.top-line{
    border-top: solid white 1px;
    width: -webkit-fill-available;
    margin-top: 17px;
    margin-left: 5px;
    font-size: $weeksFontSize;
    color :white;
}

</style>
    