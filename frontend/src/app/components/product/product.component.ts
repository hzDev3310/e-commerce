import { Component, Input } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
})
export class ProductComponent {
  @Input() product!: Product;
}
