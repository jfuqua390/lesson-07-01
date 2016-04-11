import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),

  newHero() {
    const att = {
      name: this.name,
      score: 0,
    };
    this.get(`heroes`).add(att).then(() => {
      this.transitionToRoute(`index`)
    });
  },
});
