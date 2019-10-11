import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUlr = 'http://www.mocky.io/v2/5da00bd6300000c568524ab9';
  

  constructor(private _http : Http) { }

  getProducts() {
   
    //return this._http.get(this._productUlr);

    return this._http.get(this._productUlr);
  }

  private handleError(error: Response){
    console.log('Error: ' + error);
  }

 
}
