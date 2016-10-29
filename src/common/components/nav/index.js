import angular from 'angular';

import './nav.scss';
import NavComponent from './nav.component';
import Tooltip from 'common/directives/tooltip';

export default angular.module('app.common.components.nav', [
  Tooltip.name,
])

.component('nav', NavComponent);
