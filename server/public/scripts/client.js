console.log('js');
var app = angular.module('galleryApp', []);

app.controller('galleryController', ['$http', function ($http) {
    console.log('Gallery Controller has been loaded');
    var self = this;
    this.gallery = aboutMe;
    self.message='angular is working';

    // self.clickPic = function(){
    //     aboutMe.description = true;
    // }

    // self.clickDescription = function(){
    //     var showPic = true;
    //     var showDescription = false;
    // }

}])

var aboutMe = [
    { name: 'Family                                                                                                                                                                                                                                                                           ', 
    pic: '/img/human-family.png',
    description: 'My grandfather, also named Guillermo Olivos, showed me the monastery in Lima where he used to sneak into as a boy to study religion and medicine. As the first-born son of the first-born American son of an immigrant from Peru, I try to never forget my roots.'},

    { name: 'The Girls', 
    pic: '/img/dog-family.png',
    description: 'Filler'},

    { name: 'Exercise', 
    pic: '/img/Grandmas.png',
    description: 'Filler'},

    { name: 'Road Trips', 
    pic: '/img/Road-Trips.png',
    description: 'Filler'},

    { name: 'Connectedness', 
    pic: '/img/Connectedness.png',
    description: 'Filler'},

    { name: 'Adventure', 
    pic: '/img/badlands.png',
    description: 'Filler'
}
]