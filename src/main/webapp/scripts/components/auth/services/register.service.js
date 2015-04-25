'use strict';

angular.module('firstApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


