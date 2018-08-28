import { Component } from '@angular/core';
import {CountriesService} from './services/countries.service';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http'


@Component({
  moduleId: module.id,    
  selector: 'my-app',
  templateUrl: './app.component.html',
  
})
export class AppComponent  { 

    someValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 5000);
   })

    caption: string = "Select your country"
    show: boolean = false;
    name: string = 'ravi'
    today = new Date();

    countries: Array<string> = null

    constructor(private countriesService: CountriesService, private http: Http){
      // this.countries = countriesService.getCountries();

      
    }

    addCountry(country: string){
      console.log(country);

        this.http.post('http://localhost:8000/countries',{country: country}).toPromise()
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
        })
      /* .map((res:Response) => res.json())
      .subscribe(
			(data) => { 
        this.countries = data;
                console.log(data);
       }) */
    }

    deleteCountry(index: number){
      console.log(index);

       var url = 'http://localhost:8000/countries/' + index

      this.http.delete(url)
      .map((res:Response) => res.json())
      .subscribe(
			(data) => { 
        this.countries = data;
                console.log(data);
       })
    }

    loadData(){
      this.http.get('http://localhost:8000/countries')
      .map((res:Response) => res.json())
      .subscribe(
			(data) => { 
        this.countries = data;
                console.log(data);
       })
    }


handleCaptionSelected(country:string){
    console.log('handleCaptionSelected');
    console.log(country)
    this.caption = country;
    this.show = false;
}   

    toggleShow(){
      this.show = !this.show
    }

}
