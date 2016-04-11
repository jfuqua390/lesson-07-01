import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route(`new`);

  this.route(`edit`, { path: `/:_id` });
  this.route(`heroes`);
  this.route('vote');
});

export default Router;
