var TechnologyModel = DS.Model.extend({
    characters: DS.hasMany('character'),
    name: DS.attr('string'),
    icon: DS.attr('string')
});

export default TechnologyModel;

