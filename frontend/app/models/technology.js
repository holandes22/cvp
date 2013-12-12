var TechnologyModel = DS.Model.extend({
    characters: DS.hasMany('character'),
    name: DS.attr('string'),
    icon: DS.attr('string')
});

TechnologyModel.FIXTURES = [
    { id: 1, name: 'vagrant', icon: 'assets/img/vagrant.png' },
    { id: 2, name: 'vim', icon: 'assets/img/vim.png' },
    { id: 3, name: 'python', icon: 'assets/img/python-logo-generic.svg' },
    { id: 4, name: 'docker', icon: 'assets/img/docker.png' },
    { id: 5, name: 'emberjs', icon: 'assets/img/emberjs.png' },
    { id: 6, name: 'js', icon: 'assets/img/js.png' },
    { id: 7, name: 'jquery', icon: 'assets/img/jquery.png' },
    { id: 8, name: 'django', icon: 'assets/img/django.png' },
    { id: 9, name: 'HTML5', icon: 'assets/img/html5.png' },
    { id: 10, name: 'vmware', icon: 'assets/img/vmware.jpg' },
    { id: 11, name: 'postgresql', icon: 'assets/img/postgresql.png' },
    { id: 12, name: 'git', icon: 'assets/img/git.png' },
    { id: 13, name: 'svn', icon: 'assets/img/svn.png' },
    { id: 14, name: 'raspberrypi', icon: 'assets/img/raspberrypi.svg' },
    { id: 15, name: 'travis', icon: 'assets/img/travis.png' },
    { id: 16, name: 'jenkins', icon: 'assets/img/jenkins.png' },
    { id: 17, name: 'linux', icon: 'assets/img/linux.jpg' },
    { id: 18, name: 'apache', icon: 'assets/img/apache.png' },
    { id: 19, name: 'celery', icon: 'assets/img/celery.png' },
    { id: 20, name: 'openstack', icon: 'assets/img/openstack.png' },
];

export default TechnologyModel;

