import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-titlenormal',
  templateUrl: './titlenormal.component.html',
  styleUrls: ['./titlenormal.component.css']
})
export class TitlenormalComponent {
  @Input() title: string = '';
  @Input() customClass: string = '';
}
