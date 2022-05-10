import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  liked = false;

  @Input() content = {
    index: 0,
    title: "",
    description: "",
    img: "",
    link: "",
  };

  @Output() articleIsLiked : EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  likeArticle(value: number) {
    this.liked = !this.liked;
    this.articleIsLiked.emit(value);
  }

}
