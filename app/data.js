App.Skill.FIXTURES = [
    { id: 1, name: 'Python', rating: 3 },
    { id: 2, name: 'Javascript', rating: 2 },
    { id: 3, name: 'PHP', rating: 5 },
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
    { id: 20, name: 'openstack', icon: 'libs/img/openstack.png' },
];

App.Attribute.FIXTURES = [
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
        avatarIcon: 'libs/img/karl_popper_retrato.jpg',
        playerFullName: 'Pablo Klijnjan',
        socialProfileURL: 'https://coderwall.com/holandes22',
        level: 21,
        health: 100,
        mana: 80,
        geekiness: 90,
        skills: [1, 2],
        technologies: getIds(App.Technology),
        attributes: getIds(App.Attribute)
    },
    {
        id: 2,
        avatarName: 'dummy',
        avatarIcon: 'libs/img/dummy.gif',
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
