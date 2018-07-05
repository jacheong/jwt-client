import {
    trigger,
    style,
    transition,
    animate,
    keyframes,
    query,
    stagger,
} from '@angular/animations';

export const StaggerAnimation =
    trigger('listAnimation', [
        transition("* => *", [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('50ms', [
                animate('1000ms ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                ]))
            ]), { optional: true }),
        ]),
    ]);
