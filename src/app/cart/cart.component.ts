import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) { 
    this.cartList$= cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
