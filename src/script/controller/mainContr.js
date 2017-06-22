/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('mainCtrl',['$scope','$http',function ($scope,$http) {

    $http.get('data/positionList.json').success(function (res) {
        //console.log(res);
        $scope.list = res;
    });
}]);