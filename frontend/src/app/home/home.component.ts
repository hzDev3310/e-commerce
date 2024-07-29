// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../components/product/product.component';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../../types';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SideBardComponent } from '../components/sideBard/sideBard.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    NavbarComponent,
    SideBardComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Products | null = null;
  productContent: Product[] = [];
  category: string | undefined = undefined;
  name: string | undefined = undefined;
  totalPages : number = 1;
  page: number = 0;
  size: number = 8;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    const url = 'http://localhost:8080/products';

    this.productService
      .getProducts(url, this.page, this.size, this.category, this.name)
      .subscribe(
        (response: Products) => {
          this.products = response;
          this.productContent = this.products.content;
          this.totalPages = this.products.totalPages
        },
        (error) => {
          console.error('Failed to fetch products:', error);
        }
      );
  }

  onCategoryChanged(newCategory: string) {
    this.category = newCategory;
    this.fetchProducts();
  }

  onNameChanged(newName: string) {
    this.name = newName;
    this.fetchProducts();
  }
  onChangePage(newPage: number) {
    this.page = newPage;
    this.fetchProducts();
  }
  nextPage() {
    if (this.totalPages>1 && this.page <this.totalPages) {
      this.page++;
      this.fetchProducts();
    }
  }
  previousPage() {
    if (this.totalPages >1 && this.page >0) {
      this.page--;
      this.fetchProducts();
    }
  }
}
