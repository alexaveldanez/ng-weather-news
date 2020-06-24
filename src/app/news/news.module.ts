import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { TrimOutletNamePipe } from './trim-outlet-name.pipe';
import { MaterialModule } from '../material.module';
import { TechNewsArticlesComponent } from './tech-news-articles/tech-news-articles.component';



@NgModule({
  declarations: [NewsArticlesComponent, TrimOutletNamePipe, TechNewsArticlesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NewsArticlesComponent,
    TechNewsArticlesComponent
  ]
})
export class NewsModule { }
