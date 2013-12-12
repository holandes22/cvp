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

CharacterModel.FIXTURES = [
    {
        id: 1,
        avatarName: 'holandes22',
        avatarIcon: 'assets/img/karl_popper_retrato.jpg',
        playerFullName: 'Pablo Klijnjan',
        socialProfileURL: 'https://coderwall.com/holandes22',
        level: 21,
        health: 100,
        mana: 80,
        geekiness: 90,
        skills: [1, 2],
        technologies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        attributes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        id: 2,
        avatarName: 'dummy',
        avatarIcon: 'assets/img/dummy.gif',
        playerFullName: 'Dummy Dum',
        socialProfileURL: '#',
        level: 3,
        health: 90,
        mana: 100,
        geekiness: 10,
        skills: [3],
        technologies: [3, 4, 10],
        attributes: [8, 6]
    }
];

export default CharacterModel;
