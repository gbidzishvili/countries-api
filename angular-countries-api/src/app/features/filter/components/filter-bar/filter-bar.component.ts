import { Component } from '@angular/core';

@Component({
    selector: 'app-filter-bar',
    templateUrl: './filter-bar.component.html',
    styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
    regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    isOpened = false;
}
