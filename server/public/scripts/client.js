console.log('js');
var app = angular.module('galleryApp', []);

app.controller('galleryController', ['$http', function ($http) {
    console.log('Gallery Controller has been loaded');
    var self = this;
    this.gallery = puppies;
    self.message='angular is working';
}]);

var puppies = [
    { name: 'Jojo', 
    pic: '/img/puppy-1.jpg'},
    
    { name: 'Buck', 
    pic: '/img/puppy-2.jpg'},

    { name: 'Jojo', 
    pic: '/img/puppy-3.jpg'},

    { name: 'Jojo', 
    pic: '/img/puppy-4.jpg'},

    { name: 'Jojo', 
    pic: '/img/puppy-5.jpg'},

    { name: 'Jojo', 
    pic: '/img/puppy-6.jpg'},
]