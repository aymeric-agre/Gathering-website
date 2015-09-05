import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector : 'Logo'
})

@View({
    template: '<svg version="1.1" id="logoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 150" enable-background="new 0 0 400 150" xml:space="preserve">'
})

class LogoComponent{
    /*global Snap*/

}

bootstrap(LogoComponent);