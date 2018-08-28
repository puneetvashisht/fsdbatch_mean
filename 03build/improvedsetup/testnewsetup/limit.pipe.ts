import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit'
})
export class LimitPipe implements PipeTransform {

    transform(value: Array<string>, args: number) {
        console.log(value);
        console.log(args)
        return value.splice(args)
    }

}