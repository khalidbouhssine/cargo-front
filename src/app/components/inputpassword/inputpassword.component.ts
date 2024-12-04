import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputpassword',
  templateUrl: './inputpassword.component.html',
  styleUrls: ['./inputpassword.component.css']
})
export class InputpasswordComponent {
  @Input() type: string = 'text'; 
  @Input() id: string = ''; 
  @Input() placeholder: string = ''; 
  @Input() required: boolean = false; 

  value: string = ''; 
  
  inputType: string = this.type;

  togglePassword(): void {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
