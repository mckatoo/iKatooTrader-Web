import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PoloniexService } from './poloniex.service';

@Component({
  selector: 'poloniex',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.scss']
})
export class PoloniexComponent implements OnInit {
  // tickers= [];
  msgErro: string;
  pairs;
  Tickers={
    ticker:[]
  };
  // Tickers= [];

  constructor(public poloniexService: PoloniexService) { }

  returnTicker() {
    this.poloniexService.returnTicker()
      .subscribe(
        res => {
          // this.tickers = res;
          this.pairs = Object.keys(res);
          for (var i = 0; i < this.pairs.length; i++) {
            this.Tickers.ticker[i] = {
              id:           res[this.pairs[i]]['id'],
              pair:         this.pairs[i],
              quoteVolume:  res[this.pairs[i]]['quoteVolume'],
              high24hr:     res[this.pairs[i]]['high24hr'],
              highestBid:   res[this.pairs[i]]['highestBid'],
              last:         res[this.pairs[i]]['last'],
              low24hr:      res[this.pairs[i]]['low24hr'],
              lowestAsk:    res[this.pairs[i]]['lowestAsk'],
              percentChange:res[this.pairs[i]]['percentChange'],
              baseVolume:   res[this.pairs[i]]['baseVolume'],
              isFrozen:     res[this.pairs[i]]['isFrozen'],
            }
          }
          this.Tickers.ticker.sort(function(a, b){
            return b.baseVolume - a.baseVolume
          });
          // this.Tickers.ticker.reverse();
          console.log(this.Tickers);
          return this.Tickers;
        },
        error => this.msgErro = error
      );
  }

  ngOnInit() {
    this.returnTicker();
  }

}
