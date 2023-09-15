import { Component, OnInit } from '@angular/core';

interface HeaderItem {
  type: "text" | "link",
  label: string;
  link?: string;
}

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {
  name: string = "";
  items: HeaderItem[] = [];

  constructor() {
    this.name = "Rodrigo Elizeu Cherutti";
    this.items = [
      { type: 'link', link: "mailto:rodrigocherutti@hotmail.com", label: "rodrigocherutti@hotmail.com" },
      { type: 'link', link: "linkedin.com/in/rodrigo-cherutti", label: "LinkedIn" },
      { type: 'link', link: "github.com/PregoBS", label: "GitHub" },
      { type: 'text', label: "Novo Hamburgo - RS" },
    ];
  }

  ngOnInit(): void {
  }

}
