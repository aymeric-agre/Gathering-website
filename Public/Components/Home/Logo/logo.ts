import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector : 'Logo'
})

@View({
    templateUrl:'./Components/Home/Logo/logo_template.svg'
})

export class LogoComponent{
    text : any;

    constructor(){
        this.text = document.getElementById('#logoText');

        /*global TweenLite*/
        TweenLite.from(this.text, 2, {opacity:0});
    }

}

bootstrap(LogoComponent);