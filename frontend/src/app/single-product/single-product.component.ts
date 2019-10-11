import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
  providers: [ProductService]
})
export class SingleProductComponent implements OnInit {



  constructor(private _productService: ProductService) {   }

  ngOnInit() {
  }

}
