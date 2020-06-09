import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() likeCount: number;
  @Input() isActive: boolean;

  onClick() {
    this.likeCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
