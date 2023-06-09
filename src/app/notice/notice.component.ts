import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent {
  @Input()
  backgroundColor?: string;

  @Input()
  primary = false;
}
