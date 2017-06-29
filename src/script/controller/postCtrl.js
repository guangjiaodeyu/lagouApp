/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('postCtrl',['$scope','$http',function ($scope,$http) {

    $scope.tabList = [
        {
            id:'all',
            name:'全部'
        },
        {
            id:'pass',
            name:'邀请面试'
        },
        {
            id:'failure',
            name:'不合适'
        }
    ];

    var tabId = 'all';

    $http.get('data/myPost.json').success(function (res) {
        $scope.positionList = res;
    });

    $scope.filterObj = {};

    $scope.tClick = function (id,name) {
        switch (id){
            case 'all':
                delete $scope.filterObj.state;
                break;
            case 'pass':
                $scope.filterObj.state = '1';
                break;
            case 'failure':
                $scope.filterObj.state = '-1';
                break;
        }
    }


}]);