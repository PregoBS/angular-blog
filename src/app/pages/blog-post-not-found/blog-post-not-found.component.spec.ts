import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostNotFoundComponent } from './blog-post-not-found.component';

describe('BlogPostNotFoundComponent', () => {
  let component: BlogPostNotFoundComponent;
  let fixture: ComponentFixture<BlogPostNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
