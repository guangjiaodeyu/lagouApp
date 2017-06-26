/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
    .directive('appTab',[function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/appTab.html',
            scope:{
                list:'=',
                tabClick:'&'
            },
            link:function ($scope) {
                $scope.click = function (tab) {
                    $scope.tabId = tab.id;
                    $scope.tabClick(tab);
                }
            }
        }
    }]);