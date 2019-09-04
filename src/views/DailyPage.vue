<template lang="pug">
.container-margin
    div.title
        NavButton(text="Daily" color="#bbbbbb" fontSize="35px" disabledButton iconColor="#508fd6" icon="calendar")
    Daily(key = "22")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Daily from '@/components/daily/Daily.vue';
import NavButton from '@/components/NavButton.vue';

@Component({
  components: {
    Daily,
    NavButton,
  },
})
export default class DailyPage extends Vue {
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
.text-style{
    font-size: 35px;
    color: rgb(153, 153, 153);
}
.icon-style{
    color: rgb(81, 143, 214);
    margin-right: 10px;
}
.title{
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>
