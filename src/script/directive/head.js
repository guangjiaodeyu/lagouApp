/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
    .directive('appHead',['cache',function (cache) {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/head.html',
            scope:{

            },
            link:function ($scope) {
                $scope.name = cache.get('name') || '';
            }
        }
    }]);