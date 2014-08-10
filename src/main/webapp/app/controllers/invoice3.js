var invoiceApp = angular.module('invoiceApp', [
  'ngRoute',
  'invoiceAnimations',
  'invoiceControllers',
  'invoiceFilters',
  'invoiceServices'
]);

invoiceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        templateUrl: 'app/partials/dashboard.html',
	controller: 'InvoiceController'
      });
  }]);
