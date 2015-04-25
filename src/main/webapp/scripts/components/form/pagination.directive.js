/* globals $ */
'use strict';

angular.module('firstApp')
    .directive('firstAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
