import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourites/favourites.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body:"something",
    isLiked: true,
    likeCount: 10
  }

  courses = [1,2,3]

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }
}
