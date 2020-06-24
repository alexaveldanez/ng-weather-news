import { Component } from '@angular/core';

import { Article } from '../article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent {
  articles: Article[];

  constructor(private newsService: NewsService ) {
    this.newsService.pagesOutput.subscribe((articles) => {
      this.articles = articles;
    });
    this.newsService.getPage(1);
   }


}
