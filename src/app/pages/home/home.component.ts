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
    this.title = "Projects";
  }

  ngOnInit(): void {
    this.posts = this.getApiBlogPosts();
  }

  private getApiBlogPosts(): PostCardProps[] {
    const MAX_SUBTITLE_CHARACTERS = 300;
    const posts = DataApi.getBlogPosts();
    return posts.map((post: BlogPost) => {
      const subtitle = post.excerpt && post.excerpt.length > MAX_SUBTITLE_CHARACTERS
        ? post.excerpt.substring(0, MAX_SUBTITLE_CHARACTERS) + "..."
        : post.excerpt
        || "";

      return {
        uid: post.uid,
        title: post.title,
        image: post.image || "",
        date: post.updatedAt,
        subtitle,
      }
    });
  }
}
