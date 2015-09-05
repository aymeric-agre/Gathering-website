import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector : 'sidebar'
})

@View({
    templateUrl: './Components/Core/Sidebar/sidebar_template.html'
})

class SidebarComponent{

}

bootstrap(SidebarComponent);