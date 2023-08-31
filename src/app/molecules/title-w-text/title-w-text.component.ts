import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-w-text',
  templateUrl: './title-w-text.component.html',
  styleUrls: ['./title-w-text.component.scss']
})
export class TitleWTextComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
