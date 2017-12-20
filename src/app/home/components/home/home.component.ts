import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Focused date
    focusedDate: Date = new Date(2017, 11, 25);

    // Setting the selected date
    selectedDate: Date = new Date(2017, 10, 20);


    constructor() { }

    ngOnInit() {

    }

}
