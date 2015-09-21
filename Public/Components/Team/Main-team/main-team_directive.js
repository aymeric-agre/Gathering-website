'use strict';

app.directive('mainTeam', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Team/Main-team/main-team_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/
            var fiches = document.getElementsByTagName('fiche-team')
            TweenMax.staggerFrom(fiches, 0.4, {
                bottom : '-=500',
                opacity : 0
            }, 0.1);

            //Close fiche onBlur
            element.bind('click', function(event){
                var fiches = document.getElementsByTagName('fiche-team');
                for (var i=0; i<fiches.length; i++){
                    if(event.target !== fiches[i]){
                        angular.element(fiches[i]).removeClass('active');
                    }
                }
            });
        }
    }
});