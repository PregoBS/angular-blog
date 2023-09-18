import type { ResumeSectionEntry } from 'src/types-api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {
  @Input() sectionName: string = "";
  @Input() sectionEntries: ResumeSectionEntry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
