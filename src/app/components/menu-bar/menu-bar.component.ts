import { Component, OnInit } from '@angular/core';
import type { Link } from 'src/types';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  links: Link[] = [];

  constructor() {
    this.links = [
      {
        endpoint: '/',
        label: 'Home',
        external: false,
      },
      // {
      //   endpoint: '/resume',
      //   label: 'Currículo',
      //   external: false,
      // },
      {
        endpoint: 'https://pokedex.pregobs.xyz/',
        label: 'Pokédex',
        external: true,
      },
    ];
  }

  ngOnInit(): void {
  }

}
