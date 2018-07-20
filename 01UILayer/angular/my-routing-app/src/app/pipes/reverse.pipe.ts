import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: string, args: any) {
        if(value){
            console.log('Pipe called...')
            console.log(value)
            return value.split('').reverse().join('')
        }
        
    }

}