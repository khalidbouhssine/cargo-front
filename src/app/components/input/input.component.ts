import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = 'text'; // Default type is 'text'
  @Input() id: string = '';      // Unique ID for input field
  @Input() placeholder: string = ''; // Placeholder text
  @Input() required: boolean = false; // Whether the input is required

  value: string = ''; // Holds the value of the input
}
