/**
 * Created by Nicolas on 28/03/2016.
 */
import {Component} from 'angular2/core';

@Component({
    templateUrl: 'app/login/login.html'
})
export class LoginComponent {
    clicked(event, target) {
        event.preventDefault();

        if (target === "login-close") {
            //console.log(_children );
            // _children.forEach(function(elem){
            //     console.log(elem);
            //     //cmp=>cmp.dispose();
            // });
        }
    }
}