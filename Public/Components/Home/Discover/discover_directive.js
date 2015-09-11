'use strict';

app.directive('discover', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Home/Discover/discover_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global Back*/
            var hexagons = document.getElementsByTagName('small-hexagon');
            var tmEnter = new TimelineMax(),
                tmLeave = new TimelineMax();
            tmEnter.staggerFrom(hexagons, 1, {left:-200, opacity:0, ease: Back.easeOut.config(1)}, 0.2)
                .call(function(){
                    scope.taller();
                })
                .from('.text', 1, {opacity : 0});

            element.bind('click', function(){
                tmLeave
                    .to('.text', 0.5, {opacity : 0})
                    .staggerTo(hexagons, 1, {opacity : 0}, 0.2)
                    .call(function(){
                        $state.go('presentation');
                    });

            })
        }
    }
});
