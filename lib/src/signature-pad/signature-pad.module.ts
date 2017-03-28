import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadComponent } from './signature-pad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignaturePadComponent],
  exports: [SignaturePadComponent],
  entryComponents: [SignaturePadComponent]

})
export class SignaturePadModule { 
    public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SignaturePadComponent,
      providers: []
    };
  }
}