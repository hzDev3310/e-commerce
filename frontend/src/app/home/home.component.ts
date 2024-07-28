import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../components/product/product.component';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../../types';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SideBardComponent } from '../components/sideBard/sideBard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent,NavbarComponent,SideBardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Products | null = null;
  productContent: Product[] = [];
  category: string | undefined = undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    const url = 'http://localhost:8080/products';
    const page = 0;
    const size = 12;

    this.productService.getProducts(url, page, size, this.category).subscribe(
      (response: Products) => {
        this.products = response;
        this.productContent = this.products.content;
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }
}
