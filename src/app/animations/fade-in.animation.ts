// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ opacity: 0 }),
        animate(0, style({ opacity: 0 }))
      ]),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ])
    ]);
