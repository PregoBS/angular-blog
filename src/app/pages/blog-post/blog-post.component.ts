import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataApi } from 'src/app/data/api';
import type { BlogPost, BlogPostContent } from 'src/types-api';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  autor: string = "";
  title: string = "";
  content: BlogPostContent[] = [];
  updatedAt: string = "";
  image: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.setPostContent(value.get('uid'));
    });

  }

  private getApiBlogPost(uid: string | null): BlogPost | null {
    const post = DataApi.getBlogPosts().filter((_post) =>  _post.uid === uid)[0];
    return post || null;
  }

  private setPostContent(uid: string | null) {
    const post = this.getApiBlogPost(uid);

    if (!post) {
      this.router.navigate(['/blog/posts/not-found']);
      return;
    }

    this.autor = post.autor;
    this.title = post.title;
    this.content = post.content;
    this.updatedAt = post.updatedAt;
    this.image = post.image || "";
  }

}
