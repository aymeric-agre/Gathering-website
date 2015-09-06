'use strict';

app.directive('discover', function(){
    return{
        restrict : 'E',
        templateUrl : './Components/Home/Discover/discover_template.html',
        link : function(scope, element){

            /*global TweenLite*/
            /*global Back*/
            var hexagons = document.getElementsByName('small-hexagon');
            TweenLite.from(hexagons, 1, {opacity:0, size : 0, ease: Back.easeOut.config(1)})

        }
    }
});
