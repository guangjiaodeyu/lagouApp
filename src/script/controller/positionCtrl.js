/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').controller('positionCtrl',['$q','$scope','$http','$state','cache',function ($q,$scope,$http,$state,cache) {

    // cache.put('to','day');
    cache.remove('to');
    $scope.isLogin = false;

    function getPosition() {
        var def = $q.defer();

        $http.get('data/position.json?id='+$state.params.id).success(function (res) {
            $scope.position = res;
            def.resolve(res);
        }).error(function (err) {
            def.reject(err)
        });

        return def.promise;
    }



    function getCompany(id) {
        $http.get('data/company.json?id=' + id).success(function (res) {
            $scope.company = res;
        })
    }


    getPosition().then(function (obj) {
        getCompany(obj.companyId);
    });
}]);