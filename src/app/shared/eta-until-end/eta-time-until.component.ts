import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'eta-time-until',
  templateUrl: './eta-time-until.component.html'
})

export class EtaTimeUntilComponent implements OnInit{
  @Input() date: string;
  constructor(){
  }

  deadline(){
    let parts = this.date.split('/');
    let etaDate = new Date(2017, parseInt(parts[0])-1, parseInt(parts[1]));
    let today = new Date();
    return Math.floor((etaDate.getTime() - today.getTime())/(1000*60*60*24));
  }
  ngOnInit(){}
}
