/**
 * Created by Administrator on 2017/6/19.
 */

angular.module('app')
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        'use strict';

        $stateProvider
            .state('main',{
            url:'/main',
            templateUrl:'view/main.html',
            controller:'mainCtrl'
        }).state('position',{
            url:'/position/:id',
            templateUrl:'view/template/positionDetail.html',
            controller:'positionCtrl'
        }).state('company',{
            url:'/company/:id',
            templateUrl:'view/template/companyDetail.html',
            controller:'companyDetailCtrl'
        });
        $urlRouterProvider.otherwise('/main');
}]);