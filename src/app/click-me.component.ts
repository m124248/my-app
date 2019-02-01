
import { Component } from '@angular/core';
import { ButtonService} from './button.service';
import { Click } from './click';

@Component({
  selector: 'app-click-me',
  providers: [ButtonService],
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{click.greeting}}`
})
export class ClickMeComponent {

  click: Click = null;

  constructor(private buttonService: ButtonService) {
    this.click = new Click();
  }

  onClickMe() {
    this.buttonService.onClickMe()
      .subscribe(click => this.click = click);
    }
}

