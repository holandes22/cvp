var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.resource('about');
    this.resource('characters', function() {
        this.resource('character', { path: ':character_id'});
    });
    this.route('about', { path: '/' });
  // this.route('component-test');
  // this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
