import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() isButton: boolean = false;
  @Input() buttonModifier: string = '';
  @Input() placeholder: string = '';
}
