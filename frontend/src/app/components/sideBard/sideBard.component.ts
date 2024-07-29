import { OnInit,Component ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sideBard',
  templateUrl: './sideBard.component.html',
  standalone: true,
})
export class SideBardComponent implements OnInit {
  
  @Output() categoryChange = new EventEmitter<string>();
  onCategorySelect(category: string) {
    this.categoryChange.emit(category);
  }
  constructor() { }

  ngOnInit() {
  }

}
