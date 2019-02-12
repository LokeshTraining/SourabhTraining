import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'initials' //uppercase
})

export class MyFirstPipe implements PipeTransform{
    transform(value){
        console.log(value);
    
       return `Hi ${value.toUpperCase()} welcome to my Home page`    
     
    }

}
