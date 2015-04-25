'use strict';

angular.module('firstApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
