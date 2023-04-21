import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Input() buttonName: string = 'Submit';
  @Input() isDisabled: boolean = false;

  submit() {
    console.log('Update');
    this.isDisabled = true;
  }
}
