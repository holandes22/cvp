var SkillModel = DS.Model.extend({
    characters: DS.hasMany('character'),
    name: DS.attr('string'),
    rating: DS.attr('number')
});

export default SkillModel;
