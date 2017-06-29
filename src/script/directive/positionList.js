/**
 * Created by Administrator on 2017/6/20.
 */
'use strict';
angular.module('app').directive('appPositionList',['$http',function ($http) {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/contentList.html',
        scope:{
            data:'=' ,   //指令和控制器的$scope是同一个，降低指令和控制器的耦合度，有利于指令的复用
            filterObj:'=',
            name:'=',
            isFavorite:'='
        },
        link:function ($scope) {

            $scope.select = function (obj) {
                //点击的时候要发送请求，当后台数据发生改变之后，前端数据再改变
                $http.post('data/favorite.json',{
                    id:obj.id,
                    select:!obj.select
                }).success(function (res) {
                    obj.select = !obj.select;
                })




            }

        }
    }
}]);