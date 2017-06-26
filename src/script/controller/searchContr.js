/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('searchCtrl',['$scope','$http','dict',function ($scope,$http,dict) {

    $scope.name = '';


    $scope.search = function () {
        $http.get('data/positionList.json?name=' + name).success(function (res) {
            $scope.list = [];

            angular.forEach(res,function (item) {

                if (item.cityName == $scope.name || item.companyName == $scope.name || item.job == $scope.name || $scope.name == ''){
                    $scope.list.push(item);//输入内容，满足条件才显示
                }

            })

        });


    };


    $scope.search();
    $scope.isSheetShow = false;
    $scope.appSheet = {};


    $scope.tabList = [
        {
            "id": "city",
            "name": "城市"
        },
        {
            "id": "salary",
            "name": "薪资"
        },
        {
            "id": "scale",
            "name": "规模"
        }
    ];

    var tabId = '';

    $scope.tClick = function (id, name) {
        tabId = id;
        $scope.appSheet = dict[id];
        $scope.isSheetShow = true;
    };

    $scope.filterObj = {};

    $scope.sClick = function (id,name) {

        if (id){
            angular.forEach($scope.tabList,function (item) {
                if (item.id == tabId){
                    item.name = name; //将appSheet中li的name赋值给tab中的li
                }


            });

            $scope.filterObj[tabId + 'Id'] = id;

        }else{

            delete $scope.filterObj[tabId + 'Id'];
            angular.forEach($scope.tabList,function (item) {

                if (item.id == tabId){//不能省略，否则点击一个tab的li为默认时，其余的也会变成默认
                    switch (item.id){
                        case 'city':
                            item.name = '城市';
                            break;
                        case 'salary':
                            item.name = '薪资';
                            break;
                        case 'scale':
                            item.name = '规模';
                            break;
                    }
                }


            })
        }





    }

}]);