/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('favoriteCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('data/myFavorite.json').success(function (res) {
        $scope.positionList = res;
    })
}]);