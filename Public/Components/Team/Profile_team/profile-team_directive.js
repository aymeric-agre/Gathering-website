'use strict';

app.directive('profileTeam', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Team/Profile_team/profile-team_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/

            TweenMax.staggerFrom(element.children(), 0.5, {
                opacity :0,
                delay : 0.5
            },0.1);
        }
    }
});