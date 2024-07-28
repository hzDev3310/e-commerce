import { Products } from '../../types';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products | null = null;
  category: string | undefined = undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    const url = 'http://localhost:8080/products';
    const page = 0;
    const size = 10;

    this.productService.getProducts(url, page, size, this.category).subscribe(
      (response: Products) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }
}
