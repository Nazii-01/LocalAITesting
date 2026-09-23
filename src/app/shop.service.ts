import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shop, Product } from './models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private shops: Shop[] = [
    {
      id: 1,
      name: 'Fresh Mart',
      address: '123 Main St',
      rating: 4.5,
      products: [
        { id: 1, name: 'Apples', price: 3.99, image: '🍎', category: 'Fruits' },
        { id: 2, name: 'Bread', price: 2.49, image: '🍞', category: 'Bakery' },
        { id: 3, name: 'Milk', price: 4.29, image: '🥛', category: 'Dairy' },
        { id: 7, name: 'Tomatoes', price: 2.79, image: '🍅', category: 'Vegetables' }
      ]
    },
    {
      id: 2,
      name: 'Green Grocer',
      address: '456 Oak Ave',
      rating: 4.8,
      products: [
        { id: 4, name: 'Bananas', price: 2.99, image: '🍌', category: 'Fruits' },
        { id: 5, name: 'Carrots', price: 1.99, image: '🥕', category: 'Vegetables' },
        { id: 6, name: 'Cheese', price: 5.99, image: '🧀', category: 'Dairy' },
        { id: 8, name: 'Eggs', price: 3.49, image: '🥚', category: 'Dairy' }
      ]
    }
  ];

  constructor() {}

  getShops(): Observable<Shop[]> {
    return new Observable(observer => {
      observer.next(this.shops);
      observer.complete();
    });
  }

  getShopById(id: number): Observable<Shop | undefined> {
    return new Observable(observer => {
      observer.next(this.shops.find(shop => shop.id === id));
      observer.complete();
    });
  }

  addToCart(product: Product): void {
    const current = this.cartItems.value;
    this.cartItems.next([...current, product]);
  }

  removeFromCart(productId: number): void {
    const current = this.cartItems.value;
    const index = current.findIndex(item => item.id === productId);
    if (index > -1) {
      current.splice(index, 1);
      this.cartItems.next([...current]);
    }
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.price, 0);
  }

  getCartCount(): number {
    return this.cartItems.value.length;
  }
}