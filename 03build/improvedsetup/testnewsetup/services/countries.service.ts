import { Injectable } from '@angular/core';

@Injectable()
export class CountriesService {
    countries: Array<string> = ['A', 'B', 'C', 'D']
 
    getCountries(){
        console.log('service method..')
        return this.countries;
    }

    constructor() { }

}