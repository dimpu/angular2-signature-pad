import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public label:string = 'Sign Above';
  public width:number = 300;
  public height:number = 300;

  constructor() { }

  ngOnInit() {
  }

  onClearHandler() {
    console.log('onclear clicked...');
  }

  onSaveHandler(data) {
    console.log('onsave clicked');
    console.log(data);
    window.open(data);
  }

}
