var AttributeModel = DS.Model.extend({
    character: DS.belongsTo('character'),
    name: DS.attr('string'),
    rating: DS.attr('number'),
    advanced: DS.attr('boolean')
});

AttributeModel.FIXTURES = [
    { id: 1, name: 'Python tests', rating: 5, advanced: false },
    { id: 2, name: 'Javascript tests', rating: 1, advanced: false },
    { id: 3, name: 'CI', rating: 3, advanced: false },
    { id: 4, name: 'Source Control', rating: 3, advanced: false },
    { id: 5, name: 'TDD', rating: 3, advanced: false },
    { id: 6, name: 'Software Craftmanship', rating: 2, advanced: false },
    { id: 7, name: 'Automate All The Things!', rating: 4, advanced: false },
    { id: 8, name: 'Unix based Operating System admin', rating: 3, advanced: false },
    { id: 9, name: 'Enterprise level storage - host side', rating: 4, advanced: false },
    { id: 10, name: 'Enterprise level storage ', rating: 3, advanced: false },
    { id: 11, name: 'Design', rating: 0, advanced: false },
];

export default AttributeModel;
