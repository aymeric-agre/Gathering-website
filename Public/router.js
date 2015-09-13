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
                templateUrl :'./Components/Presentation/presentation.html'
            }).
                state('presentation.education', {
                    url: '/education',
                    templateUrl : './Components/Presentation/Pages/education.html'
                }).
                state('presentation.games', {
                    url: '/education',
                    templateUrl : './Components/Presentation/Pages/games.html'
                }).
                state('presentation.emotions', {
                    url: '/education',
                    templateUrl : './Components/Presentation/Pages/emotions.html'
                });

});

