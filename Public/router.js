var modules= ['ngRoute','ui.router', 'ngMaterial'];
var app = angular.module('app',modules);


app.config(function ($stateProvider, $urlRouterProvider){

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: './Components/Home/home.html'
            }).
            state('presentation', {
                url: '/presentation',
                template : '<main-presentation></main-presentation>',
                templateUrl :'Components/Presentation/Main_presentation/main-presentation_template.html'
            }).
                state('presentation.education', {
                    url: '/education',
                    template : '<fiche-presentation fiche="\'education\'"></fiche-presentation>'
                }).
                state('presentation.games', {
                    url: '/games',
                    template : '<fiche-presentation fiche="\'games\'"></fiche-presentation>'
                }).
                state('presentation.emotions', {
                    url: '/emotions',
                    template : '<fiche-presentation fiche="\'emotions\'"></fiche-presentation>'
                });

});

