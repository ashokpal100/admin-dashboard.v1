
(function(){
  // Angular App Routers
    angular.module('adminApp').config(['$ocLazyLoadProvider','$stateProvider','$urlRouterProvider','$locationProvider',function($ocLazyLoadProvider,$stateProvider, $urlRouterProvider,$locationProvider) {
        
        $locationProvider.html5Mode({enabled: true});
        $urlRouterProvider.otherwise('/dashboard/home');
    
        $stateProvider
            .state('dashboard', {
                url:'/dashboard',
                templateUrl: 'views/dashboard/main.html'
            })
            .state('dashboard.home',{
                url:'/home',
                controller: 'MainCtrl',
                templateUrl:'views/dashboard/home.html',
                resolve: {
                  loadMyFiles:['$ocLazyLoad',function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name:'adminApp',
                      files:[
                      'js/controllers/main.js'
                      ]
                    })
                  }]
                }
            });
    }])
})();