import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector : 'Sidebar'
})

@View({
    templateUrl: './Components/Core/Sidebar/sidebar_template.html'
})

class SidebarComponent{

}

bootstrap(SidebarComponent);