import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Prodotto A', category: 'Categoria 1', price: 19.9, stock: 25, createdAt: new Date('2026-09-10') },
    { id: 2, name: 'Prodotto B', category: 'Categoria 1', price: 49.0, stock: 8, createdAt: new Date('2026-09-14') },
    { id: 3, name: 'Prodotto C', category: 'Categoria 2', price: 5.5, stock: 120, createdAt: new Date('2026-09-20') },
    { id: 4, name: 'Prodotto D', category: 'Categoria 3', price: 89.99, stock: 0, createdAt: new Date('2026-09-25') },
    { id: 5, name: 'Prodotto E', category: 'Categoria 2', price: 12.0, stock: 40, createdAt: new Date('2026-09-30') },
    { id: 6, name: 'Prodotto F', category: 'Categoria 3', price: 34.5, stock: 15, createdAt: new Date('2026-10-03') },
    { id: 7, name: 'Prodotto G', category: 'Categoria 1', price: 7.9, stock: 60, createdAt: new Date('2026-10-06') },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getCount(): number {
    return this.products.length;
  }

  getLatest(limit: number): Product[] {
    return [...this.products]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}