

import { HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";
export interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?: {
    includeHeaders?: string[];
  } | boolean;
}

// Represents the product entity
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageId: string;
  category: string;
  quantity: number;
}

// Represents the sorting information
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

// Represents the pagination details
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

// Represents the paginated response
export interface PaginatedResponse<T> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
}

export interface Products extends PaginatedResponse<Product> {}
