'use strict';

app.directive('sidebar', function(){
    return{
        restrict : 'E',
        template : '<canvas id="sidebarCanvas" height="1080" width="240"></canvas>',
        link : function(scope, element){

            /*
                ANIMATION
             */
            /*global TweenMax*/
            /*global TimelineMax*/
            var tl = new TimelineMax();
            tl.from('#sidebarCanvas', 2, {opacity : 0});


            /*
                CANVAS
             */
            var canvas = document.getElementById('sidebarCanvas');
            var ctx = canvas.getContext('2d'),
                mainGradient,
                secondGradient;
            var color1 = 'rgba(126, 23, 16, 1)',
                color2 = 'rgba(229, 18, 18, 1)';
            var xStart, yStart, xStop, yStop, x0, y0, x1, y1, x2, y2, x3, y3;
            scope.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            //Mobile adaptibility
            scope.$watch('screenWidth', function(newValue, oldValue){
                var width = window.getComputedStyle(canvas, null).getPropertyValue("width");
                var height = window.getComputedStyle(canvas, null).getPropertyValue("height");
                if(newValue > 600){
                    xStart=canvas.clientWidth/2; yStart= 0;
                    xStop=canvas.clientWidth/2, yStop= canvas.clientHeight;
                    x0= 0; y0=canvas.clientHeight/2 - 200;
                    x1= canvas.clientWidth/2; y1= canvas.clientHeight/2-300;
                    x2= canvas.clientWidth/2; y2= canvas.clientHeight/2+300;
                    x3= 0; y3= canvas.clientHeight/2 + 200;
                    drawSidebar();
                }else{
                    xStart=0; yStart= canvas.clientHeight/2;
                    xStop=canvas.clientWidth, yStop= canvas.clientHeight/2;
                    x0= canvas.clientWidth/2 - 200; y0=0;
                    x1= canvas.clientWidth/2-300; y1= canvas.clientHeight;
                    x2= canvas.clientWidth/2+300; y2= canvas.clientHeight;
                    x3= canvas.clientWidth/2 + 200; y3= 0;
                    drawSidebar();
                }
            });

            function drawSidebar(){
                // Create gradient
                mainGradient = ctx.createLinearGradient(xStart, yStart, xStop, yStop);
                secondGradient = ctx.createLinearGradient(xStart, yStart, xStop, yStop);

                // Add colors
                mainGradient.addColorStop(1, color1);
                mainGradient.addColorStop(0, color2);
                secondGradient.addColorStop(0, color1);
                secondGradient.addColorStop(1, color2);


                // Fill with gradient
                ctx.fillStyle = mainGradient;
                ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

                //Fill the polygon with the second gradient
                ctx.beginPath();
                ctx.moveTo(x0,y0);
                ctx.lineTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.fillStyle = secondGradient;
                ctx.fill();
            }






        }
    }
});