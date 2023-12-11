import { Component, EventEmitter, Output, OnInit} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  productName: string = '';

@Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchProduct() {
    this.searchTextChanged.emit(this.productName);
  }
  clearSearch() {
    this.productName = "";
    this.searchTextChanged.emit(this.productName);
  }
}
