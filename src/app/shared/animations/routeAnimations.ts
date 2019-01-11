import { transition, trigger, query, style, animateChild, animate, group } from "@angular/animations";

export const slideInAnimation  =
trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', top: '0px' }),
    query(':enter, :leave',  [
      style({
        position: 'absolute',
        top: '114px',
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '100%'})
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '-100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ])
  ])
]);