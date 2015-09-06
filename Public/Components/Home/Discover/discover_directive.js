'use strict';

app.directive('discover', function(){
    return{
        restrict : 'E',
        templateUrl : './Components/Home/Discover/discover_template.html',
        link : function(scope, element){

            /*global TweenMax*/
            /*global Back*/
            var hexagons = document.getElementsByTagName('small-hexagon');
            TweenMax.staggerFrom(hexagons, 1.5, {opacity:0,  size : 0, ease: Back.easeOut.config(1)})

        }
    }
});
