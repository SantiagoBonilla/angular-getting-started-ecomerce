import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // to get JSON shipping data via HTTP

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor( private cartService: CartService ) { 
        this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}