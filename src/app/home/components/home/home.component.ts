import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Minimum and maximum dates
    minDate: Date = new Date(2017, 5, 15);
    maxDate: Date = new Date(2017, 6, 15);

    // Allow navigation?
    allowNavigation = false;

    constructor() { }

    ngOnInit() {

    }

}
