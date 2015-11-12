
/* Services */
'use strict';

angular.module('app.services', [])
    .service('users', ['$http', function ($http) {

        var urlBase = '/api/rest/users/';

        this.getUsers = function () {
            return $http.get(urlBase);
        };
    }]);
