import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-w-element',
  templateUrl: './subtitle-w-element.component.html',
  styleUrls: ['./subtitle-w-element.component.scss']
})
export class SubtitleWElementComponent {
  @Input() subtitle: string = '';
}
