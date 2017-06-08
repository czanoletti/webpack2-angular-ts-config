
import { Component } from '@angular/core';
declare let $:any;
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    getElement(e: any){
        console.log(e);
        $('.well').text('Jquery works fine like hell');
    }

}