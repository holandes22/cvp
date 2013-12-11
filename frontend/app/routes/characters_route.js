var CharactersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('character');
    },
});

export default CharactersRoute;
