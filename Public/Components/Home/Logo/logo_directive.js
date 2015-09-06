'use strict';

app.directive('logo', function(){
    return{
        restrict : 'E',
        template : '<svg version="1.1" id="logoSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 150" enable-background="new 0 0 400 150" xml:space="preserve"> </svg>',
        link : function(scope, element){
            /*global Snap*/
            var snap = new Snap('#logoSvg');
            var text = snap.text(200, 50, 'GATHERING');
                text.attr({'textAnchor':'middle', 'fontSize':50});

        }
    }
});
