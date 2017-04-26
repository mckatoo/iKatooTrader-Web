import { Component, OnInit } from '@angular/core';

import { PoloniexService } from './poloniex.service';
import { Ticker } from './ticker';

@Component({
  selector: 'poloniex',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.scss']
})
export class PoloniexComponent implements OnInit {
  tickers= [];
  msgErro: string;
  public arrayOfKeys;

  constructor(public poloniexService: PoloniexService) { }

  // returnTicker() {
  //   this.poloniexService.returnTicker()
  //     .subscribe(
  //       tickers => this.tickers = tickers,
  //       error   => this.msgErro = error
  //     );
  // }

  ngOnInit() {
    this.poloniexService.returnTicker()
      .subscribe(
        res => {
          this.tickers = res;
          this.arrayOfKeys = Object.keys(res);
          // this.tickers = JSON.parse(JSON.stringify(res));
          console.log(this.tickers);
        },
        error => this.msgErro = error
      );
  }

}
