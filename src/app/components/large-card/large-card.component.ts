import { Component, OnChanges, Input } from '@angular/core';
import type { PostCardProps } from 'src/types';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent implements OnChanges, PostCardProps {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() date: string = "";
  @Input() image: string = "";
  @Input() uid: string = "";
  endpoint?: string;

  constructor() { }

  ngOnChanges(): void {
    if (this.title !== "") {
      this.endpoint = this.title.replace(/ /g, "-").replace(/\?/g, "");
    }
  }

}
