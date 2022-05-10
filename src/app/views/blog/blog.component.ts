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
      title: "Mining the moon to help save life on Earth (op-ed)",
      description: "Moving heavy industry off Earth could help cure some of what ails our planet.",
      img: "https://cdn.mos.cms.futurecdn.net/iuHquB3ZvAtM5vHpwsHxFR-1024-80.jpg.webp",
      link: "https://www.space.com/mining-moon-save-life-earth-op-ed"
    },
    {
      index: 2,
      title: "Blue Origin announces crew for next suborbital space tourism launch",
      description: "The company has not yet announced a launch date for the NS-21 mission.",
      img: "https://img.20mn.fr/XCZIJLGoS7uajWDKumz4yg/768x492_interieur-capsule-blue-origin",
      link: "https://www.space.com/blue-origin-crew-ns21-suborbital-space-mission"
    },
    {
      index: 3,
      title: "A giant asteroid the size of a building just safely zoomed past Earth overnight",
      description: "The building-sized asteroid came within 14 Earth-moon distances of our planet.",
      img: "https://cdn.mos.cms.futurecdn.net/ScMuz8aWPCYZEn4hysnPsA-1024-80.jpg.webp",
      link: "https://www.space.com/giant-asteroid-safe-flyby-may-9"
    },
    {
      index: 4,
      title: "China launches Tianzhou 4 cargo craft to new Tiangong space station",
      description: "The freighter will help get China's Tianhe core module ready for a new crewed mission.",
      img: "https://4aspace.fr/wp-content/uploads/2021/05/a9d550e9307346a2b6c2f91f7e0ab8fb.png",
      link: "https://www.space.com/china-launches-tianzhou4-spacecraft-tiangong-space-station"
    },
    {
      index: 5,
      title: "BlissLights Sky Lite 2.0 star projector review",
      description: "The BlissLights Sky Lite 2.0 star projector is a fun, non-scientific, app-controlled light and laser display. ",
      img: "https://cdn.mos.cms.futurecdn.net/B4FJ2GwCQit8tZgnV4ip6h-1200-80.jpeg.webp",
      link: "https://www.space.com/blisslights-sky-lite-2.0-star-projector-review"
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
