import { Component, OnInit } from '@angular/core';

import { PoloniexService } from './poloniex.service';

@Component({
  selector: 'poloniex',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.scss']
})
export class PoloniexComponent implements OnInit {
  tickers= [];
  msgErro: string;
  moedas;
  Tickers={};
  // Tickers= [];

  constructor(public poloniexService: PoloniexService) { }

  ngOnInit() {
    this.poloniexService.returnTicker()
      .subscribe(
        res => {
          this.tickers = res;
          this.moedas = Object.keys(res);
          for (var i = 0; i < this.moedas.length; i++) {
            this.Tickers["id"]                = res[this.moedas[i]]['id'];
            this.Tickers["moeda"]             = this.moedas[i];
            this.Tickers["volumeTransacoes"]  = res[this.moedas[i]]['quoteVolume'];
            
            // this.Tickers={
            //   id: res[this.moedas[i]]['id'],
            //   moeda: this.moedas[i],
            //   volumeTransacoes: res[this.moedas[i]]['quoteVolume']
            // }
            // this.Tickers.push([
            //   this.moedas[i],
            //   res[this.moedas[i]]['id'],
            //   res[this.moedas[i]]['quoteVolume']
            // ]);
          }
          console.log(this.Tickers);
        },
        error => this.msgErro = error
      );
  }

}
