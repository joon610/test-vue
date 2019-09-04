import { CalendarType } from './CalendarType';

export default class CalendarUtils {

  private today!: Date;
  private lastDate!: Date;
  private firstDate!: Date;
  private calendar: CalendarType[][] = [];
  private week: string[] = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

  constructor() {
    this.initDate();
  }

  public initDate( offsetMonth: number = 0) {
    if (this.today === undefined
      || offsetMonth === 0) {
      this.today = new Date();
    } else {
      this.today = new Date(this.today.getFullYear(), this.today.getMonth() + offsetMonth );
    }
    this.firstDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    this.lastDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0);
  }

  public getCalendar() {
    const day = this.getStartDay() - 1;
    const total = this.getWeekCnt() * 7;
    this.calendar = [];
    let monthInfo: CalendarType[] = [];
    for (let dayCnt = 0; dayCnt < total + 1; dayCnt++) {
      const currentDate = new Date(this.today.getFullYear(), this.today.getMonth(), dayCnt - day);
      const weekCnt = Math.floor(dayCnt / 7);
      const monthBuf: CalendarType = new CalendarType();
      if (this.isEndWeek(dayCnt)) {
        this.calendar[weekCnt - 1] = monthInfo;
        monthInfo = [];
      }
      monthBuf.date = currentDate.getDate();
      if (this.isDisableDate(dayCnt)) {
        monthBuf.greyType = true;
      }
      if (this.isWeekend(currentDate)) {
        monthBuf.weekend = true;
      }
      monthInfo.push(monthBuf);
    }
    return this.calendar;
  }

  public getLastDate(): number {
    return this.lastDate.getDate();
  }

  public getStartDay(): number {
    return this.firstDate.getDay();
  }

  public getWeekCnt(): number {
    const weeks = Math.ceil((this.getStartDay() + this.getLastDate()) / 7);
    return weeks;
  }

  public getWeek(weekName: string[] = this.week) {
      return weekName;
  }

  public getYear() {
      return this.today.getFullYear();
  }

  public getDay() {
      return this.today.getDay();
  }

  public getDate() {
      return this.today.getDate();
  }

  public getMonth() {
      return this.today.getMonth() + 1;
  }

  public getFullDate() {
      return this.today.getFullYear() + '-' + (this.today.getMonth() + 1 );
  }

  public getCurrentToday(): number {
    return new Date().getDate();
  }

  public getCurrentFullDate(): string {
    const windowDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    return windowDate;
  }

  private isDisableDate(dayCnt: number) {
      if (dayCnt - this.firstDate.getDay() < 0 ||
      dayCnt > (this.getStartDay() + this.getLastDate() - 1)) {
          return true;
      } else {
          return false;
      }
  }

  private isEndWeek(cnt: number) {
      if (cnt % 7 === 0
          && cnt !== 0) {
              return true;
      } else {
          return false;
      }
  }

  private isWeekend(currentDate: Date) {
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6 ) {
          return true;
      } else {
          return false;
      }
  }
}
