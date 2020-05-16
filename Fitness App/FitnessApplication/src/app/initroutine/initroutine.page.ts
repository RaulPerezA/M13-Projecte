import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MaxLengthValidator } from '@angular/forms';

const circleR = 80;
const circleDasharray = 2 + Math.PI * circleR;

@Component({
  selector: 'app-initroutine',
  templateUrl: './initroutine.page.html',
  styleUrls: ['./initroutine.page.scss'],
})
export class InitroutinePage implements OnInit {
  time: BehaviorSubject<string> =new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer:number;
  interval;

  startDuration = 5;
  circleR = circleR;
  circleDasharray = circleDasharray;
  state:'start' | 'stop' = 'stop';

  constructor() { }

  ngOnInit() {
  }

  startTimer(duration:number){
    this.state= 'start';
    clearInterval(this.interval);
    this.timer = duration;
    this.updateTimeValue();
    this.interval = setInterval( ()=>{
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  
  percentageOffset(percent){
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }

  updateTimeValue(){
    let minutes:any= this.timer / 60;
    let seconds:any= this.timer % 60;

    minutes= String('0' + Math.floor(minutes)).slice(-2);
    seconds= String('0' + Math.floor(seconds)).slice(-2);

    const text =minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);
    
    --this.timer;
    if(this.timer<-1){
      this.startTimer(this.startDuration);
    }
  }
}
