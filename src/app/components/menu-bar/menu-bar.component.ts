import { Component, OnInit } from '@angular/core';
import type { Link, SocialMediaLink } from 'src/types';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  links: Link[] = [];
  socialMedias: SocialMediaLink[] = [];

  constructor() {
    this.links = [
      {
        endpoint: 'blog',
        label: 'Blog',
      },
      {
        endpoint: 'resume',
        label: 'About',
      },
      {
        endpoint: 'contact',
        label: 'Contact',
      },
      {
        endpoint: 'projects',
        label: 'Projects',
      },
    ];
    this.socialMedias = [
      {
        icon: 'linkedin',
        name: 'Linkedin',
        url: 'https://linkedin.com',
      },
      {
        icon: 'githum',
        name: 'GitHub',
        url: 'https://github.com',
      },
    ];
  }

  ngOnInit(): void {
  }

}
