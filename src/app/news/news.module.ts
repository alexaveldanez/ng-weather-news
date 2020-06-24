import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';
import { SharedModule } from '../shared/shared.module';
import { TechNewsArticlesComponent } from './tech-news-articles/tech-news-articles.component';



@NgModule({
  declarations: [NewsArticlesComponent, TrimOutletNamePipe, TechNewsArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewsArticlesComponent,
    TechNewsArticlesComponent
  ]
})
export class NewsModule { }
