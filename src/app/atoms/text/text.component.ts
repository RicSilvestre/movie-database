import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnChanges {
  @Input() truncatedLines: number = 0;
  isTruncated: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.isTruncated = this.truncatedLines !== 0
  }
}
