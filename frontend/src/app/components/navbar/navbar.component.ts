import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [FormsModule],
})

export class NavbarComponent implements OnInit {
  @Output() nameChange = new EventEmitter<string>();
  nameInput: string = '';
  onNameSelect() {
    console.log(this.nameInput);
    this.nameChange.emit(this.nameInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
