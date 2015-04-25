/* globals $ */
'use strict';

angular.module('firstApp')
    .directive('firstAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
