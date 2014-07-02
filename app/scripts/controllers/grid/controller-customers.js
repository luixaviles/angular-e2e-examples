'use strict';

var app = angular.module('angularE2EExamples');
app.controller('GridCustomersController', function ($scope, $http) {
  $scope.customers = [{id: 1, name: 'Lissa Montrose', email: 'lissa@company.com', city: 'Washington', note: ''},
                      {id: 2, name: 'Karri Lanze', email: 'karri@company.com', city: 'Dallas', note: ''},
                      {id: 3, name: 'Michael Smith', email: 'michael@company.com', city: 'Berkeley', note: ''},
                      {id: 4, name: 'Fred Tyler', email: 'fred@company.com', city: 'Washington', note: ''}
                     ];

  $scope.gridCustomers = {
    data: 'customers',
    enableColumnResize: true,
    enableColumnReordering: true,
    multiSelect: false,
    width: 'auto'
  };


});
