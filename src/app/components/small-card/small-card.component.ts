import { Component, Input, OnChanges, OnInit } from '@angular/core';
import type { PostCardProps } from 'src/types';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnChanges, PostCardProps {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() date: string = "";
  @Input() image: string = "";
  endpoint?: string;

  ngOnChanges(): void {
    if (this.title !== "") {
      this.endpoint = `blog/posts/${this.title.replace(/ /g, "-").replace(/\?/g, "")}`;
    }
  }

}
