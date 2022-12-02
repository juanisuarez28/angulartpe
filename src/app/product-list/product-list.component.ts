import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[]=[
    {
    name:"Perfume bubble",
    type:"liquido",
    price:80,
    stock:30,
    image:"assets/img/perfume.jpeg",
    clearance:true,
    quantity:0,
  },
  {
    name:"Cera ",
    type:"crema",
    price:50,
    stock:10,
    image:"assets/img/cera.jpeg",
    clearance:false,
    quantity:0,
  },
  {
    name:"Esponja",
    type:"limpiador",
    price:10,
    stock:0,
    image:"assets/img/esponja.jpeg",
    clearance:false,
    quantity:0,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m:String){
    alert(m);
  }


}
