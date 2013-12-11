var AttributeModel = DS.Model.extend({
    character: DS.belongsTo('character'),
    name: DS.attr('string'),
    rating: DS.attr('number'),
    advanced: DS.attr('boolean')
});

export default AttributeModel;
