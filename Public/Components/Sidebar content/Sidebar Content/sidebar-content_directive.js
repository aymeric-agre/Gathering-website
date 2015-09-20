'use strict';

app.directive('sidebarContent', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Sidebar content/Sidebar Content/sidebar-content_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/
            element.bind('click', function(){
                $state.go('team');
            })
        }
    }
});