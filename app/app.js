window.App = Ember.Application.create({
    rootElement: '#emberRoot'
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
    this.resource('characters', function() {
        this.resource('character', { path: ':character_id'});
    });
});

App.CharactersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('character');
    },
});

Ember.Handlebars.helper('format-rating', function(rating) {
    var html = '<div>';
    for (var i = 0; i < rating; i++){
        html += '<span class="glyphicon glyphicon-star-empty"></span>';
    }
    html += '</div>';
    return new Handlebars.SafeString(html);
});

App.Character = DS.Model.extend({
    avatarName: DS.attr('string'),
    playerFullName: DS.attr('string'),
    level: DS.attr('number'),
    health: DS.attr('number'),
    mana: DS.attr('number'),
    geekiness: DS.attr('number'),
    skills: DS.hasMany('skill', { async: true }),
    technologies: DS.hasMany('technology', { async: true }),
    attributes: DS.hasMany('attribute', { async: true })
});

App.ModelMixin = Ember.Mixin.create({
    characters: DS.hasMany('character'),
    name: DS.attr('string'),
});

App.Skill = DS.Model.extend(App.ModelMixin, {
    rating: DS.attr('number')
});

App.Technology = DS.Model.extend(App.ModelMixin, {
    icon: DS.attr('string')
});

App.Attribute = DS.Model.extend({
    character: DS.belongsTo('character'),
    name: DS.attr('string'),
    rating: DS.attr('number'),
    advanced: DS.attr('boolean')
});


App.Skill.FIXTURES = [
    { id: 1, name: 'Python', rating: 3 },
    { id: 2, name: 'Javascript', rating: 2 },
];

App.Technology.FIXTURES = [
    { id: 1, name: 'vim', icon: '' },
    { id: 2, name: 'tmux', icon: '' },
];

App.Attribute.FIXTURES = [
    { id: 1, name: 'Python tests', rating: 5, advanced: false },
    { id: 2, name: 'Javascript tests', rating: 1, advanced: false },
];

App.Character.FIXTURES = [
    {
        id: 1,
        avatarName: 'holandes22',
        playerFullName: 'Pablo Klijnjan',
        level: 21,
        health: 100,
        mana: 80,
        geekiness: 90,
        skills: [1, 2],
        technologies: [1, 2],
        attributes: [1, 2]
    }
];
