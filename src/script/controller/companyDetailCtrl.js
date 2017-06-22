/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').controller('companyDetailCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
    $http.get('data/company.json?' + $state.params.id).success(function (res) {
        $scope.company = res;
    })
}]);