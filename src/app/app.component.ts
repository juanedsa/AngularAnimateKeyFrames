import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animate', [
      state('bounceOutUp', style({})),
      transition('* => bounceOutUp', [
        animate(800, keyframes([
          style({ transform: ' translate3d(0, -10px, 0)', offset: 0.2 }),
          style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
        ]))
      ]),
      state('bounceInRight', style({})),
      transition('* => bounceInRight', [
        animate(800, keyframes([
          style({ opacity: 0, transform: 'translate3d(3000px, 0, 0)', offset: 0.2 }),
          style({ opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.4 }),
          style({ opacity: 1, transform: 'translate3d(10px, 0, 0)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translate3d(-5px, 0, 0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {

  public state = '';

  animate(state: string) {
    this.state = state;
  }
}
