import { Component } from '@angular/core';
import type { PostCardProps } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  posts: PostCardProps[] = [];

  constructor() {
    this.title = "angular-blog";
    this.posts = [
      {
        title: 'iPhone 15 estreia com corpo em titânio, USB-C e nova lente zoom',
        image: 'assets/images/large-post-image.webp',
        date: '12/09/2023',
        subtitle: 'A Apple apresentou a família iPhone 15, smartphones premium que trazem novidades importantes da conectividade à construção',
      },
      {
        title: 'Review GoPro Hero 12 Black | Câmera de ação que preza pela estabilidade',
        image: 'assets/images/small-post-image-1.webp',
        date: '11/09/2023',
        subtitle: '',
      },
      {
        title: 'Review Xiaomi Pad 6 | Um tablet potente e com tela grande',
        image: 'assets/images/small-post-image-2.webp',
        date: '11/09/2023',
        subtitle: '',
      },
      {
        title: 'Galaxy Watch 6 Classic x Watch 4 Classic | O que mudou?',
        image: 'assets/images/small-post-image-3.webp',
        date: '10/09/2023',
        subtitle: '',
      },
    ]
  }
}
