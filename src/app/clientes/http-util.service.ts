import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {
	headers() {
		let headersParams = {'Content-Type': 'application/json'};
		// if ((localStorage['key']) && (localStorage['secret'])) {
			// headersParams['Key'] = localStorage['key']; // Sua API Key.
			// headersParams['Sign'] = localStorage['secret']; //Dados POST da consulta da sua chave cryptografado com o método HMAC-SHA512.
			headersParams['Key'] = 'FDT2KX1N-TOHKK7NL-MFGMMJBO-BKBPY1E4'; // Sua API Key.
			headersParams['Sign'] = 'bafeb33de75ebff590d7317eebb208b18253c2607c7b11f993cf9e53e699ba22d3b66a93192589c4722746a5faea8221e626dd93f37c861fc41d12f35126d49c'; //Dados POST da consulta da sua chave cryptografado com o método HMAC-SHA512.
		// }
		let headers = new Headers(headersParams);
		let options = new RequestOptions({headers: headers});
		return options;
	}

	extrairDados(response: Response) {
    	let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
	    return Observable.throw('Erro acessando servidor remoto.');
	}
}