import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  articles = [
    {
      index: 1,
      title: "Titre de mon article",
      description: "Ceci est mon nouvel article",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
    {
      index: 2,
      title: "Titre de mon article",
      description: "Ceci est mon nouvel article",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
    {
      index: 3,
      title: "Titre de mon article",
      description: "Ceci est mon nouvel article",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
    {
      index: 4,
      title: "Titre de mon article",
      description: "Ceci est mon nouvel article",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
    {
      index: 5,
      title: "Titre de mon article",
      description: "Ceci est mon nouvel article",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
  ];
  newArticle = {
    index: this.articles.length + 1,
    title: "Titre de mon article",
    description: "Ceci est mon nouvel article",
    img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
    link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  addArticle(){
    this.articles.push(this.newArticle);
  }

  likeArticle(id: number){
    console.log(id);
  }

}
