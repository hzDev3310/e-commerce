import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent implements OnInit {
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  @Output() previous = new EventEmitter<number>();
  currentPage: number = 0;
  pages: number[] = [0, 1, 2];

  constructor() {}

  ngOnInit() {}

  setPages() {
    if (this.totalPages <= 3) {
      // If total pages are less than or equal to 3, show all pages
      this.pages = Array.from({ length: this.totalPages }, (_, index) => index);
    } else if (this.currentPage < 2) {
      // Show the first 3 pages
      this.pages = [0, 1, 2];
    } else if (this.currentPage > this.totalPages - 3) {
      // Show the last 3 pages
      this.pages = [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1];
    } else {
      // Show 3 pages centered around the current page
      this.pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    }
  }


  // Method to change the page
  onChangePage(page: number) {
    this.pageChange.emit(page);
    this.currentPage = page;
    this.setPages()
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.next.emit();
      this.currentPage++;
      this.setPages()
    }
  }
  previousPage() {
    if (this.currentPage > 0) {
      this.previous.emit();
      this.currentPage--;
      this.setPages()
    }
  }
}
