import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpUtilService } from './../http-util.service';
import { Ticker } from './ticker';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class PoloniexService {

  private publicGetUrl = "https://poloniex.com/public?command=";
  private tradingPostUrl = "https://poloniex.com/tradingApi";

  constructor(private http: Http, private httpUtil: HttpUtilService) {}

  // METODOS PÚBLICOS DA POLONIEX
  headers = new Headers({'Content-Type': 'application/json'});

  // returnTicker() {
  returnTicker():Observable<Ticker[]> {
    return this.http.get(this.publicGetUrl+"returnTicker",this.headers)
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  // return24Volume() {
  return24Volume() {
    return this.http.get(this.publicGetUrl+"return24Volume",this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  returnOrderBook(currencyPair) {
    return this.http.get(this.publicGetUrl+"returnOrderBook&currencyPair="+ currencyPair +"&depth=10",this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  returnTradeHistory(currencyPair,start,end) {
    return this.http.get(this.publicGetUrl+"returnTradeHistory&currencyPair=" + currencyPair + "&start=" + start + "&end=" + end,this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  returnChartData(currencyPair,start,end,period) {
    return this.http.get(this.publicGetUrl+"returnChartData&currencyPair=" + currencyPair + "&start=" + start + "&end=" + end + "&period=" + period,this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  
  returnCurrencies(): Observable<Ticker[]> {
    return this.http.get(this.publicGetUrl+"returnCurrencies",this.headers)
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  
  returnLoanOrders(currency) {
    return this.http.get(this.publicGetUrl+"returnLoanOrders&currency=" + currency,this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
}
