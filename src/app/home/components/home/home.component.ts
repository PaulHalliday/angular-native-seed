import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor() { }

    /**
     * We can determine whether the date is 'even' and subsequently change the colour.
     * @param date
     */
    isEvenDate(date: Date) {
        return date.getDate() % 2 === 0
    }
}
