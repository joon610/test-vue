<template lang='pug'>
.inner-calendar(ref="innerCalendar")
  ul.calendar-title(ref="test")
    li.title 
      .title-month {{today.getMonth()}}月
        span.title-year {{today.getYear()}}年 
      .title-buttons(:style="ContainerStyle")
        b-button.button(size="is-small" type="is-dark" icon-left="arrow-left-thick" @click="preMonth()"  :style="arrowStyle")
        b-button.button(size="is-small" type="is-dark" @click="goToday()") Today
        b-button.button(size="is-small" type="is-dark" icon-left="arrow-right-thick" @click="nextMonth()" :style="arrowStyle" )
  ul.calendar-head
    li.week-container(v-for="name of weekName") 
      span.week-name {{ name }}
  ul.calendar-body(v-for="idx in today.getWeekCnt()")
    li.week-column(v-for="(today,index) in monthInfo[idx-1]" :style="getCellStyle(today.greyType)") 
      div.circle(:style="isToday(today)")
        span.date-text {{ today.date }}
      br
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CalendarUtils from '@/components/calendar/CalendarUtils';
import { CalendarType } from './CalendarType';
import ScreenInfo from '@utils/Utils';
import { Style } from 'vue-corator';
@Component
export default class Calendar extends Vue {

  private dateList: string[] = [];
  private weekName!: string[];
  private lastDate!: number;
  private dayofweek!: number;
  private monthCnt!: number;
  private monthInfo!: CalendarType[][];
  private today: CalendarUtils = new CalendarUtils();

  private disabledCellStyle = {
    backgroundColor: 'rgb(45, 45, 45)',
    color: 'grey',
    cursor: 'default',
  };

  private arrowStyle = {
    cursor: 'pointer',
  };

  private ContainerStyle = {
    display: '',
  };

  private items = ['fnc', 'render'];


  private created() {
    this.monthInfo = this.today.getCalendar();
    this.weekName = this.today.getWeek();
  }

  private isToday(today: CalendarType) {
    const currentDate = this.today.getFullDate() + '-' + today.date;
    const circle = { backgroundColor: ''};
    if (currentDate === this.today.getCurrentFullDate()
        && today.greyType !== true) {
      circle.backgroundColor = 'royalblue';
    }
    return circle;
  }

  private goToday() {
    this.today.initDate(0);
    this.monthInfo = this.today.getCalendar();
  }

  private getCellStyle(grayType: boolean) {
    if (grayType === true) {
      return this.disabledCellStyle;
    }
    return;
  }

  private nextMonth() {
    this.today.initDate(1);
    this.monthInfo = this.today.getCalendar();
  }

  private preMonth() {
    this.today.initDate(-1);
    this.monthInfo = this.today.getCalendar();
  }
}
</script>


<style lang="scss" scoped> 
$backgroundColor: rgb(32, 32, 32);
$borderStyle: 1px solid rgb(44, 44, 44);
$circle-size: 25px;

%calendar-share{ 
  display: table;
  width: 100%;
  table-layout: fixed;
  }

.date-text{
  display: inline;
  }

.button{
  border: none;
  margin-left: 10px;
  vertical-align: middle;
  }

.circle{
  border-radius: 50px;
  width: $circle-size;
  height: $circle-size;
  vertical-align: middle;
  text-align: center;
  float: right;
  }

.title-buttons{
  display: table-row-group;
  width: initial;
  line-height: 103px;
  float: right;
  margin-right: 20px;
}
.title-month{
  padding: 10px 0px 15px 40px;
  font-size: 70px;
  float: left;
  }

.title-year{
  font-size: 20px;
  padding-left: 10px;
}
.inner-calendar{
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  width: fit-content;
  background-color: $backgroundColor;
}
.full-date{
  padding: 20px;
}
.title{
  height: 100%;
  background-color: $backgroundColor;
  color: white;
  text-align: center;
  width: -webkit-fill-available;
}
.calendar-head{
  @extend %calendar-share;
  background-color: $backgroundColor; 
}
.calendar-body{
  @extend %calendar-share;
}
.calendar-title{
  @extend %calendar-share;
  background-color: $backgroundColor; 
}
.week-column{
  display: table-cell;
  text-align: right;
  border: $borderStyle;
  background-color: $backgroundColor;
  color: white;
  height: 100px;
  cursor: pointer;
  font-weight: 800;
}
.week-container{
  display: table-cell;
  text-align: center;
  background-color: $backgroundColor;
  height: 30px;
  color: white;
  text-align: left;
}
.week-name{
  margin-left: 10px;
}
.icon{
  float: left;
}
.calendar-body{
  width: 100%;
  height: 50px;
  color: black;
}
.week-column:hover{
  background: rgb(112, 112, 112);
  color: white;
}

    input[type="button"]:disabled{
        background-color:red;
      }

*{
  box-sizing: border-box;
  }
</style>
