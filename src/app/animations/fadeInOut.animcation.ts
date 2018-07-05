import {
    trigger,
    style,
    transition,
    animate,
    AnimationMetadata
} from '@angular/animations';


export const FadeInOut: AnimationMetadata =
    trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),                      //style before animation
            animate(500, style({ opacity: 1 }))      //style after animation
        ]),
        transition(':leave', [
            animate(500, style({ opacity: 0 })),
        ]),
    ]);