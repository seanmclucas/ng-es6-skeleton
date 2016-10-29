import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeComponent from './home.component';
import HomeController from './home.controller';
import ContentService from 'common/services/content.service';

export default angular.module('app.modules.home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    component: 'home',
    resolve: HomeController.resolve,
  });
})

.component('home', HomeComponent)

.service('ContentService', ContentService);
