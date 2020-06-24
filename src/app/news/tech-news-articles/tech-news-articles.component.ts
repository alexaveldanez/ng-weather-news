import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { TechNewsService } from '../tech-news.service';

@Component({
  selector: 'app-tech-news-articles',
  templateUrl: './tech-news-articles.component.html',
  styleUrls: ['./tech-news-articles.component.scss']
})
export class TechNewsArticlesComponent implements OnInit {
  techArticles: Article[];

  constructor(private techNewsService: TechNewsService) {
    this.techNewsService.pagesOutput.subscribe((articles) => {
      this.techArticles = articles;
    });
    this.techNewsService.getPage(1);
  }

  ngOnInit(): void {
  }

}
