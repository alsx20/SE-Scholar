// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'views/pages/home.html',
    controller : 'homeController',
    controllerAs: 'home'
  })

  // route for the login/create page
  .when('/lc', {
    templateUrl : 'views/pages/lc.html',
    controller : 'lcController',
    controllerAs: 'lc'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl : 'views/pages/contact.html',
    controller : 'contactController',
    controllerAs: 'contact'
  })

  // route for info page
  .when('/info', {
    templateUrl : 'views/pages/info.html',
    controller : 'infoController',
    controllerAs: 'info'
  })

  // route for user page
  .when('/user', {
    templateUrl : 'views/pages/userpage.html',
    controller : 'userController',
    controllerAs: 'user'
  })

  // route for balance page
  .when('/balance', {
    templateUrl : 'views/pages/balance.html',
    controller : 'balanceController',
    controllerAs: 'balance'
  })

  // route for scholarship page
  .when('/scholarship', {
    templateUrl : 'views/pages/scholarship.html',
    controller : 'scholarshipController',
    controllerAs: 'scholarship'
  })

  // route for account page
  .when('/account', {
    templateUrl : 'views/pages/account.html',
    controller : 'accountController',
    controllerAs: 'account'
  });

  // set our app up to have pretty URLS
  $locationProvider.html5Mode(true);
});
