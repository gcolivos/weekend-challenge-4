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
    description: 'Filler'},

    { name: 'Keller', 
    pic: '/img/meandkeller.png',
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