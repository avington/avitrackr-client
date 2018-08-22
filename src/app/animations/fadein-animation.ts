import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = [
  trigger('onEnter', [
    state(
      'out',
      style({
        opacity: '0'
      })
    ),
    state(
      'in',
      style({
        opacity: '1'
      })
    ),
    transition('out => in', [style({ opacity: '0' }), animate('300ms ease')]),
    transition('in => out', [style({ opacity: '1' }), animate('300ms ease')])
  ])
];
