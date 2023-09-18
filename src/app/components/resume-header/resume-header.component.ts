import type { ResumeHeaderItem } from 'src/types-api';
import { Component, OnInit } from '@angular/core';
import { DataApi } from 'src/app/data/api';



@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {
  name: string = "";
  items: ResumeHeaderItem[] = [];

  constructor() { }

  ngOnInit(): void {
    const resume = DataApi.getResume();
    this.name = resume.header.name;
    this.items = resume.header.items;
  }

}
