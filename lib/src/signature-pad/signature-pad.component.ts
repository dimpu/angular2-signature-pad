import { Component,Output, Input, EventEmitter, OnInit,ElementRef } from '@angular/core';
import * as SignaturePad from 'signature_pad';
import { SignaturePadService } from './signature-pad.service';

@Component({
  selector: 'signature-pad,[SignaturePad]',
  template: `
    <div id="signature-pad" class="m-signature-pad" [style.width.px]="_width" [style.height.px]="_height">
    <div class="m-signature-pad--body" [style.width.px]="_width-40" [style.height.px]="_height-40">
       <canvas [width]="_width-40" [height]="_height-40" style="touch-action: none;"></canvas>
    </div>
    <div class="m-signature-pad--footer" [hidden]="_hideFooter">
      <div class="description">{{_label}}</div>
      <button type="button" class="button clear" data-action="clear" (click)="onClearClick()">Clear</button>
      <button type="button" class="button save" data-action="save" (click)="onSaveClick()">Save</button>
    </div>
  </div>
 `,
  styles: [`
.m-signature-pad {
  position: relative;
  font-size: 10px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
  border-radius: 4px;
}

.m-signature-pad:before, 
.m-signature-pad:after {
	position: absolute;
  z-index: -1;
  content: "";
	width: 40%;
	height: 10px;
	left: 20px;
	bottom: 10px;
	background: transparent;
	-webkit-transform: skew(-3deg) rotate(-3deg);
	-moz-transform: skew(-3deg) rotate(-3deg);
	-ms-transform: skew(-3deg) rotate(-3deg);
	-o-transform: skew(-3deg) rotate(-3deg);
	transform: skew(-3deg) rotate(-3deg);
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.m-signature-pad:after {
	left: auto;
	right: 20px;
	-webkit-transform: skew(3deg) rotate(3deg);
	-moz-transform: skew(3deg) rotate(3deg);
	-ms-transform: skew(3deg) rotate(3deg);
	-o-transform: skew(3deg) rotate(3deg);
	transform: skew(3deg) rotate(3deg);
}

.m-signature-pad--body {
  padding: 20px;
  // border: 1px solid #f4f4f4;
}

.m-signature-pad--body
  canvas {
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
  }

.m-signature-pad--footer {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  height: 40px;
}

.m-signature-pad--footer
  .description {
    color: #C3C3C3;
    text-align: center;
    font-size: 1.2em;
    margin-top: 1.8em;
  }

.m-signature-pad--footer
  .button {
    position: absolute;
    bottom: 0;
  }

.m-signature-pad--footer
  .button.clear {
    left: 0;
  }

.m-signature-pad--footer
  .button.save {
    right: 0;
  }

// @media screen and (max-width: 1024px) {
//   .m-signature-pad {
//     // top: 0;
//     // left: 0;
//     // right: 0;
//     // bottom: 0;
//     // width: auto;
//     // height: auto;
//     // min-width: 250px;
//     // min-height: 140px;
//     // margin: 5%;
//   }
//   #github {
//     display: none;
//   }
// }

// @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
//   .m-signature-pad {
//     margin: 10%;
//   }
// }

// @media screen and (max-height: 320px) {
//   .m-signature-pad--body {
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 32px;
//   }
//   .m-signature-pad--footer {
//     left: 20px;
//     right: 20px;
//     bottom: 4px;
//     height: 28px;
//   }
//   .m-signature-pad--footer
//     .description {
//       font-size: 1em;
//       margin-top: 1em;
//     }
// }

  `]
})
export class SignaturePadComponent implements OnInit {
  @Output() onSave = new EventEmitter();
  @Output() onClear = new EventEmitter();
 
  private _fromDataURL:String;
  private _fromData:any;
  
  public _width:number = 200;
  public _height:number = 200;
  public _hideFooter:boolean;
  public _label:string = 'Sign above';

  private _canvas: any;
  private _signaturePad:any;
  
  constructor(
    private _el:ElementRef
  ) { }

  ngOnInit() {
  }

  @Input() 
  set width(value:number) {
    this._width = value;
  }

  @Input()
  set height(value:number) {
    this._height = value;
  }

  @Input()
  set formDataURL (value:string) {
    this._fromDataURL = value;
    this._signaturePad.fromDataURL(this._fromDataURL);
  }

  @Input()
  set fromData(value:string) {
    this._fromData = value;
    this._signaturePad.fromData(this._fromData);
  }

  @Input() 
  set hideFooter(value:boolean) {
    this._hideFooter = value;
  }

  @Input()
  set label(value:string) {
    this._label = value;
  }

  ngAfterViewInit() {
    this._canvas = this._el.nativeElement.querySelector("canvas");
    this._signaturePad = new SignaturePad(this._canvas);
  }

  onClearClick() {
    this._signaturePad.clear();
    this.onClear.emit();
  }

  onSaveClick() {
    this.onSave.emit(this._signaturePad.toDataURL()); 
  }

}