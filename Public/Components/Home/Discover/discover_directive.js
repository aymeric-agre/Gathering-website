'use strict';

app.directive('discover', function(){
    return{
        restrict : 'E',
        templateUrl : './Components/Home/Discover/discover_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global Back*/
            var hexagons = document.getElementsByTagName('small-hexagon');
            var tl = new TimelineMax();
            tl.staggerFrom(hexagons, 1, {left:-200, opacity:0, ease: Back.easeOut.config(1)}, 0.2)
                .from('.text', 1, {opacity : 0});

        }
    }
});
