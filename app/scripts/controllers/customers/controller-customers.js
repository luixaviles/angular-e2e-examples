'use strict';

var app = angular.module('angularE2EExamples');
app.controller('GridCustomersController', function ($scope, $http) {
  $scope.customers = [{id: 1, name: 'Lissa Montrose', email: 'lissa@company.com', city: 'Washington', comment: ''},
                      {id: 2, name: 'Karri Lanze', email: 'karri@company.com', city: 'Dallas', comment: ''},
                      {id: 3, name: 'Michael Smith', email: 'michael@company.com', city: 'Berkeley', comment: ''},
                      {id: 4, name: 'Fred Tyler', email: 'fred@company.com', city: 'Washington', comment: ''}
                     ];

  $scope.gridCustomers = {
    data: 'customers',
    columnDefs: [{field: 'id', displayName: 'Id'},
                 {field: 'name', displayName: 'Name'},
                 {field: 'email', displayName: 'Email'},
                 {field: 'city', displayName: 'City'},
                 {field: 'comment', displayName: 'Comment', cellTemplate: '<input class="form-control input-sm" type="text" ng-input="COL_FIELD" ng-model="row.entity.comment" />'}
    ],
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEdit: true,
    enableColumnResize: true,
    enableColumnReordering: true,
    multiSelect: false,
    width: 'auto'
  };


});
