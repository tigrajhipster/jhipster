'use strict';

angular.module('firstApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('author', {
                parent: 'entity',
                url: '/author',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'firstApp.author.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/author/authors.html',
                        controller: 'AuthorController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('author');
                        return $translate.refresh();
                    }]
                }
            })
            .state('authorDetail', {
                parent: 'entity',
                url: '/author/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'firstApp.author.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/author/author-detail.html',
                        controller: 'AuthorDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('author');
                        return $translate.refresh();
                    }]
                }
            });
    });
