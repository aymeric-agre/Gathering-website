'use strict';

app.directive('avatarTeam', function($state){
    return{
        restrict : 'E',
        template : '<img src="./Components/Team/Avatar_team/images/{{name}}.jpg">',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/

        }


    }
});