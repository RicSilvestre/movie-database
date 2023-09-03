import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input() currentRating?: string = 'N/A';
  @Input() gradientPct: string = '100%';
  @Input() starType: string = "filled";
}
