import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShopService } from '../shop.service';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops: Shop[] = [];

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shopService.getShops().subscribe(data => {
      this.shops = data;
    });
  }

  viewShop(id: number): void {
    this.router.navigate(['/shop', id]);
  }
}