import { Directive,ElementRef } from "@angular/core";


@Directive({
   selector:"[mycustom]" 
})

export class CustomDir{
    constructor(private e1:ElementRef){
      e1.nativeElement.style.color="red";
        
    }
 
}

