import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
