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
    columnDefs: [{field: 'id'},
                 {field: 'name'},
                 {field: 'email'},
                 {field: 'city'},
                 {field: 'note', cellTemplate: '<input class="form-control input-sm" type="text" ng-input="COL_FIELD" ng-model="row.entity.note" />'}
    ],
    enableColumnResize: true,
    enableColumnReordering: true,
    multiSelect: false,
    width: 'auto'
  };


});
