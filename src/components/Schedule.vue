<template lang="pug">
div
    .time 09:00~11:30
    .card-container
        div
            .title Ayako 
            b-tag frist
   
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Render } from '../utils/StyleDeco';

@Component
export default class Schedule extends Vue {


    private mounted() {
        console.dir(this);
    }
}
</script>

<style lang="scss" >
$cardBackGround: rgb(34, 34, 34);
$titleColor: white;
$fontColor: white;
$marginZero : 0 0 0 0 ;
.card-container{
    height: 200px;
    background-color: $cardBackGround;
    border-radius: 10px;
    padding: 10px;
}
.title{
    color: $fontColor;
    font-size: 2rem;
    margin-bottom: 0 !important;
}
.time{
    color: $fontColor;
    font-size: 1.5rem;
    margin: $marginZero

}

</style>