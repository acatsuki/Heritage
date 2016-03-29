/**
 * Created by Nicolas on 28/03/2016.
 */
import {Component} from 'angular2/core';
import {DynamicComponentLoader} from 'angular2/src/core/linker';
import {Injector} from 'angular2/core';
import {LoginComponent} from './login/login';

@Component({
    selector: 'my-app',
    templateUrl: 'app/core/main-page.html'
})

export class AppComponent {
    public logo = "heritage.png";

    constructor(private dcl: DynamicComponentLoader, private injector: Injector) {}

    clicked(event, target) {
        event.preventDefault();
        if (target === "login") {
            this.dcl.loadAsRoot(LoginComponent, '#login-window', this.injector).then((ref) => {
                document.querySelector("#login-window").classList.toggle("hide");
               // _children.push(ref);
                //console.log(_children);
            });
        }
    }
}

// angular2@2.0.0-beta.12
