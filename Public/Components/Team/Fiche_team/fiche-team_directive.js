'use strict';

app.directive('ficheTeam', function($state){
    return{
        restrict : 'E',
        scope: {name : '=profile'},
        templateUrl : './Components/Team/Fiche_team/fiche-team_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/
            element.bind('click', function(){
                element.addClass('active');
            });

        }
    }
});