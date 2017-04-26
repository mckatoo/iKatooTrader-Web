import { Component, OnInit } from '@angular/core';

import { PoloniexService } from './poloniex.service';
import { Ticker } from './ticker';

@Component({
  selector: 'poloniex',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.scss']
})
export class PoloniexComponent implements OnInit {
  private tickers: Ticker[];
  private msgErro: string;

  constructor(public poloniexService: PoloniexService) { }

  returnTicker() {
    this.poloniexService.returnTicker()
      .subscribe(
        tickers => this.tickers = tickers,
        error   => this.msgErro = error
      );
  }

  ngOnInit() {
    this.returnTicker();
    // this.tickers = this.poloniexService.returnTicker();
    // console.log(this.tickers);
  }

}
