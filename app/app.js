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
    { id: 1, name: 'vagrant', icon: 'libs/img/vagrant.png' },
    { id: 2, name: 'vim', icon: 'libs/img/vim.png' },
    { id: 3, name: 'python', icon: 'libs/img/python-logo-generic.svg' },
    { id: 4, name: 'docker', icon: 'libs/img/docker.png' },
    { id: 5, name: 'emberjs', icon: 'libs/img/emberjs.png' },
    { id: 6, name: 'js', icon: 'libs/img/js.png' },
    { id: 7, name: 'jquery', icon: 'libs/img/jquery.png' },
    { id: 8, name: 'django', icon: 'libs/img/django.png' },
    { id: 9, name: 'HTML5', icon: 'libs/img/html5.png' },
    { id: 10, name: 'vmware', icon: 'libs/img/vmware.jpg' },
    { id: 11, name: 'postgresql', icon: 'libs/img/postgresql.png' },
    { id: 12, name: 'git', icon: 'libs/img/git.png' },
    { id: 13, name: 'svn', icon: 'libs/img/svn.png' },
    { id: 14, name: 'raspberrypi', icon: 'libs/img/raspberrypi.svg' },
    { id: 15, name: 'travis', icon: 'libs/img/travis.png' },
    { id: 16, name: 'jenkins', icon: 'libs/img/jenkins.png' },
    { id: 17, name: 'linux', icon: 'libs/img/linux.jpg' },
    { id: 18, name: 'apache', icon: 'libs/img/apache.png' },
    { id: 19, name: 'celery', icon: 'libs/img/celery.png' },
    { id: 20, name: 'flask', icon: 'libs/img/flask.png' },
];

App.Attribute.FIXTURES = [
    { id: 1, name: 'Python tests', rating: 5, advanced: false },
    { id: 2, name: 'Javascript tests', rating: 1, advanced: false },
];

function getIds(model){
    var ids = [];
    $.each( model.FIXTURES, function(index, value){
        ids.push(value.id);
    });
    return ids;
}

App.Character.FIXTURES = [
    {
        id: 1,
        avatarName: 'holandes22',
        playerFullName: 'Pablo Klijnjan',
        level: 21,
        health: 100,
        mana: 80,
        geekiness: 90,
        skills: getIds(App.Skill),
        technologies: getIds(App.Technology),
        attributes: getIds(App.Attribute)
    }
];
