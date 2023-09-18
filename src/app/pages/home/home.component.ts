import { Component, OnInit } from '@angular/core';
import { DataApi } from 'src/app/data/api';
import type { PostCardProps } from 'src/types';
import { BlogPost } from 'src/types-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  posts: PostCardProps[] = [];

  constructor() {
    this.title = "Projetos";
  }

  ngOnInit(): void {
    this.posts = this.getApiBlogPosts();
  }

  private getApiBlogPosts(): PostCardProps[] {
    const posts = DataApi.getBlogPosts();
    return posts.map((post: BlogPost) => {
      return {
        uid: post.uid,
        title: post.title,
        image: post.image || "",
        date: post.updatedAt,
        subtitle: post.excerpt,
      }
    });
  }
}
