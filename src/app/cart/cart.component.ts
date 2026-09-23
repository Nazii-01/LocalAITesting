import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShopService } from '../shop.service';
import { Product } from '../models/shop.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total = 0;

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shopService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.shopService.getCartTotal();
    });
  }

  removeItem(productId: number): void {
    this.shopService.removeFromCart(productId);
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear all items from your cart?')) {
      this.shopService.clearCart();
    }
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    alert(`Order placed successfully!\nTotal: $${this.total.toFixed(2)}\nThank you for shopping with us!`);
    this.shopService.clearCart();
    this.router.navigate(['/shops']);
  }

  goBack(): void {
    this.router.navigate(['/shops']);
  }
}
