<template lang="pug">
.container-margin
    div.title
        NavButton(text="カレンダー" color="#bbbbbb" fontSize="35px" disabledButton iconColor="#508fd6" icon="calendar")
    Calendar
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Calendar from '@/components/calendar/Calendar.vue';
import NavButton from '@/components/NavButton.vue';

@Component({
  components: {
    Calendar,
    NavButton,
  },
})
export default class CalendarPage extends Vue {
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
