'use strict';

app.directive('sidebarMd', function(){
    return{
        restrict : 'E',
        template : '<canvas id="sidebarCanvasMd" height="1080" width="200"></canvas>',
        link : function(scope, element){

            /*
             CANVAS
             */
            var stage = new createjs.Stage("sidebarCanvasMd");
            var color1 = 'rgba(126, 23, 16, 1)',
                color2 = 'rgba(229, 18, 18, 1)';
            var width = 200,
                height = 1080;
            scope.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            var background = new createjs.Shape();
            var shape = new createjs.Shape();

            background.graphics.beginLinearGradientFill([color1, color2], [1, 0], width/2, 0, width/2, height).drawRect(0, 0, width, height);
            shape.graphics.beginLinearGradientFill([color1, color2], [0, 1], width/2, 0, width/2, height).moveTo(0,height/2-200).lineTo(0,height/2+200).lineTo(width,height/2+300).lineTo(width,height/2-300);
            stage.addChild(background);
            stage.addChild(shape);
            stage.update();

            /*
                ANIMATION
             */



        }
    }
});