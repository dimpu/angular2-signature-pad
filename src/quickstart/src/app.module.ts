//our root app component
import {Component, NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// import angular2-signature-pad module
import { SignaturePadModule } from 'angular2-signature-pad';
import { MarkdownModule } from 'angular2-markdown';


@Component({
  selector: 'my-app',
  template: `
    <signature-pad 
        (onSave)="onSaveHandler($event)" 
        (onClear)="onClearHandler()" 
        [width]="width" 
        [height]="height" 
        [hideFooter]="noFooter" 
        [label]="label"></signature-pad>

  `,
})
export class AppComponent {
  public width:number = 300;
  public height:number = 300;
  public noFooter:boolean = false;
  public label:string = 'Sign above';

  constructor() {
  }
  onSaveHandler(data) {
    console.log(data);
  }
  onClearHandler() {
    console.log('On Clear click');
  }
}

@NgModule({
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    SignaturePadModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}