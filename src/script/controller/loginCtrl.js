/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('loginCtrl',['$scope','$http','$state','cache',function ($scope,$http,$state,cache) {

    $scope.submit = function () {
        console.log($scope.user);
        $http.post('data/login.json',$scope.user).success(function (res) {
            cache.put('id',res.id);
            cache.put('name',res.name);
            cache.put('image',res.image);

            $state.go('main');
        })
    }
}]);