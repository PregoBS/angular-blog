import { Component, OnInit } from '@angular/core';
import type { Contact } from 'src/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string = "";
  contacts: Contact[] = [];

  constructor() {
    this.name = "Rodrigo Cherutti";
    this.contacts = [
      {
        name: "GitHub",
        icon: "",
        url: "https://github.com/PregoBS",
      },
      {
        name: "LinkedIn",
        icon: "",
        url: "https://linkedin.com/in/rodrigo-cherutti",
      },
      {
        name: "Outlook",
        icon: "",
        url: "mailto:rodrigocherutti@hotmail.com",
      },
    ]
  }

  ngOnInit(): void {
  }

}
