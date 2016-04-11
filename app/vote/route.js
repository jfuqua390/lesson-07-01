import Ember from 'ember';

export default Ember.Route.extend({
  heroes: Ember.inject.service(`heroes`),

  model() {
    return this.get(`heroes`).findAll();
  },
});
