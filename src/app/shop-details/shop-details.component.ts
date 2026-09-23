// ========================================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../shop.service';
import { Shop, Product } from '../models/shop.model';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  shop?: Shop;
  cartCount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shopService.getShopById(id).subscribe(data => {
      this.shop = data;
    });

    this.shopService.cartItems$.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  addToCart(product: Product): void {
    this.shopService.addToCart(product);
  }

  goBack(): void {
    this.router.navigate(['/shops']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
