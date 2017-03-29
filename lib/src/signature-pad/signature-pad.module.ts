import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadComponent } from './signature-pad.component';
import { SignaturePadService } from './signature-pad.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignaturePadComponent],
  providers: [SignaturePadService],
  exports: [SignaturePadComponent],
  entryComponents: [SignaturePadComponent]

})
export class SignaturePadModule { 
 
}