var SkillModel = DS.Model.extend({
    characters: DS.hasMany('character'),
    name: DS.attr('string'),
    rating: DS.attr('number')
});

SkillModel.FIXTURES = [
    { id: 1, name: 'Python', rating: 3 },
    { id: 2, name: 'Javascript', rating: 2 },
    { id: 3, name: 'PHP', rating: 5 },
];

export default SkillModel;
