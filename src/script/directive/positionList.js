/**
 * Created by Administrator on 2017/6/20.
 */
'use strict';
angular.module('app').directive('appPositionList',[function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/contentList.html',
        scope:{
            data:'='    //指令和控制器的$scope是同一个，降低指令和控制器的耦合度，有利于指令的复用
        }
    }
}]);