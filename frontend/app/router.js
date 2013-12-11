var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.resource('about', { path: '/about' });
    this.resource('characters', function() {
        this.resource('character', { path: ':character_id'});
    });
  // this.route('component-test');
  // this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
