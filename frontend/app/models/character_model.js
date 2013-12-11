var CharacterModel = DS.Model.extend({
    avatarName: DS.attr('string'),
    avatarIcon: DS.attr('string'),
    playerFullName: DS.attr('string'),
    socialProfileURL: DS.attr('string'),
    level: DS.attr('number'),
    health: DS.attr('number'),
    mana: DS.attr('number'),
    geekiness: DS.attr('number'),
    skills: DS.hasMany('skill', { async: true }),
    technologies: DS.hasMany('technology', { async: true }),
    attributes: DS.hasMany('attribute', { async: true })
});

export default CharacterModel;
