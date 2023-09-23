import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
    data = [];
    constructor(public http: HttpClient) {
        // this.http
        //     .get('../../../../assets/data/data.json')
        //     .subscribe((v: []) => {
        //         this.data = v.slice(1, 2);
        //         console.log(this.data);
        //     });
    }
    ngOnInit() {
        this.http
            .get('../../../../assets/data/data.json')
            .subscribe((v: []) => {
                this.data = v.slice(0, 10);
                console.log(this.data);
            });
    }
    getPopulation(population: number) {
        let newPopulation = population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return newPopulation;
    }
}
