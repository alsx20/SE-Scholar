angular.module('routerApp', [])
angular.module('routerApp', ['routerRoutes'])

// create the controllers
// this will be the controller for the ENTIRE site
.controller('mainController', function() {

  var vm = this;

  // create a bigMessage variable to display in our view
  vm.bigMessage = 'A smooth sea never made a skilled sailor.';
})

// home page specific controller
.controller('homeController', function() {

  var vm = this;

  vm.message = 'This is the home page!';
})
// about page controller
.controller('aboutController', function() {

  var vm = this;

  vm.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function() {

  var vm = this;

  vm.message = 'Contact us! JK. This is just a demo.';
})

//info page (Steps:1.html page, 2.controller in app.js, 3.app.routes.js, 4. href in index.html)
.controller('infoController', function() {

  var vm = this;

  vm.message = 'Information Page!!!';
})

// login/create controller
.controller('lcController', function() {

  var vm = this;

  vm.message = 'Login Page!!!';
})

// user page controller
.controller('userController', function() {

  var vm = this;

  vm.message = 'User Page!!!';
})

// balance controller
.controller('balanceController', function() {

  var vm = this;

  vm.message = 'Balance Page!!!';
})

// scholarship controller
.controller('scholarshipController', function() {

  var vm = this;

  vm.message = 'Scholarship Page!!!';
})

// account controller
.controller('lcController', function() {

  var vm = this;

  vm.message = 'Login Page!!!';
});
