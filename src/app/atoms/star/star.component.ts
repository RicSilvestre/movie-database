import { Component, Input, OnChanges, HostBinding, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges{
  @Input() currentRating?: string = 'N/A';
  @Input() gradientPct: string = '100%';
  @Input() starType: string = "filled";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
