import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    selectedActiveView = 'decade';
    activeViewOptions = ['month', 'year', 'decade', 'century'];

    constructor() {}
}
