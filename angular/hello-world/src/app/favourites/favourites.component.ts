import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  isFavourited = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavourited = !this.isFavourited;
  }
}
