import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNewsArticlesComponent } from './tech-news-articles.component';

describe('TechNewsArticlesComponent', () => {
  let component: TechNewsArticlesComponent;
  let fixture: ComponentFixture<TechNewsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNewsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNewsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
