import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor() {}

    isEvenDate(date: Date) {
        return date.getDate() % 2 === 0;
    }
}
