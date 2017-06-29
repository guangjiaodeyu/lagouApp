/**
 * Created by Administrator on 2017/6/28.
 */
'use strict';
angular.module('app').config(['$provide',function ($provide) {
    //$delegate指代前面待修饰的服务
    $provide.decorator('$http',['$delegate','$q',function ($delegate,$q) {

        $delegate.post = function (url, data, config) {

            var def = $q.defer();

            $delegate.get(url).success(function (res) {
                def.resolve(res);
            }).error(function (err) {
                def.reject(err);
            });
            
            return {
                success:function (cb) {
                    def.promise.then(cb);
                },
                
                error:function (cb) {
                    def.promise.then(null,cb);
                }
            }
            
        };


        return $delegate;    //必须返回，否则会导致get undefined
    }])
}]);










