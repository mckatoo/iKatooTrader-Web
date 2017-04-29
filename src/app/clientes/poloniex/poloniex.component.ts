import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { PoloniexService } from './poloniex.service';
import { Ticker } from './ticker';

@Component({
  selector: 'poloniex',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.scss']
})
export class PoloniexComponent implements OnInit {
  // tickers= [];
  msgErro: string;
  tickers: Ticker[] = [];
  currencies = [];

  constructor(public poloniexService: PoloniexService) {}

  returnTicker() {
    let keys;
    this.tickers = [];
    this.poloniexService.returnTicker()
      .subscribe(
        res => {
          keys = Object.keys(res);
          for (var i = 0; i < keys.length; i++) {
            this.tickers.push({
              id:             res[keys[i]]['id'],
              pair:           keys[i],
              quoteVolume:    res[keys[i]]['quoteVolume'],
              high24hr:       res[keys[i]]['high24hr'],
              highestBid:     res[keys[i]]['highestBid'],
              last:           res[keys[i]]['last'],
              low24hr:        res[keys[i]]['low24hr'],
              lowestAsk:      res[keys[i]]['lowestAsk'],
              percentChange:  res[keys[i]]['percentChange'],
              baseVolume:     res[keys[i]]['baseVolume'],
              isFrozen:       res[keys[i]]['isFrozen'],
            });
          }
          this.tickers.sort(function(a, b){
            return b.baseVolume - a.baseVolume
          });
          // this.tickers.reverse();
          // console.log(this.tickers);
          return this.tickers;
        },
        error => this.msgErro = error
      );
  }

  returnCurrencies() {
    this.poloniexService.returnCurrencies()
      .subscribe(
        res => {
          let keys;
          keys = Object.keys(res);
          for (var i = 0; i < keys.length; i++) {
            this.currencies.push({
              coin: keys[i],
              name: res[keys[i]]["name"]
            })
          }
          // console.log(this.currencies);
        }
      )
  }

  ngOnInit() {
    this.returnTicker();
    this.returnCurrencies();
  }

}
