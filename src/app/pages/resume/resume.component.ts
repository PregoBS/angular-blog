import type { ResumeSection } from 'src/types-api';
import { Component, OnInit } from '@angular/core';
import { DataApi } from 'src/app/data/api';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  sections: ResumeSection[] = [];

  constructor() { }

  ngOnInit(): void {
    const resume = DataApi.getResume();
    this.sections = resume.sections;
  }

}
