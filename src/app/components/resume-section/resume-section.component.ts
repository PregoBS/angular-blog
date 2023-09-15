import { Component, Input, OnInit } from '@angular/core';

interface EntryRow {
  left: string;
  right: string;
  mergeColumns: boolean;
  firstRow: boolean;
}

interface SectionEntry {
  type: "two-rows" | "more-rows";
  rows: EntryRow[];
}

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {
  @Input() sectionName: string = "";
  @Input() sectionEntries: SectionEntry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
