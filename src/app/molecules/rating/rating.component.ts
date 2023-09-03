import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() rating?: string = 'N/A';
  filledStars: number = 5;
  partialStar: number = 0;
  emptyStars: number = 0;
  gradientPct: string = '100%';
  
  ngOnChanges() {
    if (this.rating !== 'N/A') {
      const rateToNumber = Number(this.rating);
      const starsRate = rateToNumber/2;
      this.emptyStars = 5 - starsRate;
      if (starsRate % 1 !== 0) {
        this.filledStars = Math.floor(starsRate);
        this.emptyStars = Math.floor(this.emptyStars);
        this.partialStar = this.filledStars + 1;
        this.gradientPct = Math.round((starsRate % 1) * 100) + '%';
      }
    } else {
      this.emptyStars = 0;
      this.filledStars = 0;
    }
  }
}
