import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  product!: Product;

  ngOnInit(): void {
  }
  upQuantity(product: Product): void{
    if(product.quantity < product.stock)
      product.quantity++;
  }
  downQuantity(product: Product): void{
    if(product.quantity>0)  
      product.quantity--;
  }

  changeQuantity(event: any, product: Product): void{
    if(event.key>0 && event.key<=9)
      event.preventDefault();
  }
}
