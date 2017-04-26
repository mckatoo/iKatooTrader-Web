import { HttpUtilService } from './http-util.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoloniexComponent } from './poloniex/poloniex.component';
import { PoloniexService } from './poloniex/poloniex.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PoloniexComponent],
  exports: [
    PoloniexComponent
  ]
})
export class ClientesModule { }
