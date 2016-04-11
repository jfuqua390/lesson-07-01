import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),
  likeHero(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) + 1);
    this.get('heroes').update(hero);
  },

  dislikeHero(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) - 1);
    this.get('heroes').update(hero);
  },
});
