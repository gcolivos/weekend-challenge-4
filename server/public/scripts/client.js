console.log('js');
var app = angular.module('galleryApp', []);

app.controller('galleryController', ['$http', function ($http) {
    console.log('Gallery Controller has been loaded');
    var self = this;
    this.gallery = aboutMe;
    self.message='angular is working';
}])

var aboutMe = [
    { name: 'Family', 
    pic: '/img/human-family.png',
    description1: 'This past March my grandfather, also named Guillermo Olivos, showed me the monastery in Lima where he used to sneak into as a boy to study religion and medicine. As the first-born son of the first-born American son of an immigrant from Peru, I try to never forget my roots.',
    description2:'My parents split time between Germantown, Maryland and Bangor, Maine. My mother was raised in central Maine, and my father \'s family is based in the greater metropolitan area of Washington, D.C. I am the oldest of three children, with a sister in DC and a brother in Cleveland, Ohio. We are pretty spread out, but family remains a very important facet of my life.'},

    { name: 'The Girls', 
    pic: '/img/dog-family.png',
    description1: 'These are the three ladies I spend the most time with; I took this picture over the summer at Hartford Beach on the South Dakota side of Big Stone Lake, looking across at Minnesota. On the left is Brittany,my girlfriend and the most human of the three. In the middle is Keller, a blind and deaf 2 year old Border Collie who makes up for her two missing senses with an abundance of love and shockingly astute memory of where furniture sits in her home.',
    description2: 'Deeper in the water is Bonnie, the 12 year old who has been at Brittany\'s side for over a decade. I\'m grateful to have these three in my life for all of the adventures, from the wild outdoors ones to the simple evenings we spend doing homework with Bonnie at Brittany\'s feet and Keller curled up on my lap while I write code.'},

    { name: 'Exercise', 
    pic: '/img/exercise.png',
    description1: 'Exercise has always been a big part of my life. Growing up, I spent a lot of time in competitive swimming and also ran track and played soccer. In college I trained as a boxer for one year and played on our collegiate water polo team the next year. In my twenties I continued to work out regularly with a running and lifting schedule.',
    description2: 'In the last few years I\'ve recommitted to my workout routine with a new rigor. I\'ve run three marathons in as many years, regularly climb at one of the Vertical Endeavors locations in the Minneapolis area, and still get into the gym to lift a few times a week. KARE 11 even featured me in a human story piece about Twin Cities marathoners called "WhyIRun" a year ago (hence the kinda bad-ass looking picture above!)'},

    { name: 'Road Trips', 
    pic: '/img/Road-Trips.png',
    description1: 'Window open, arm stretched on top of the steering wheel, figuring out where to go next. Road tripping has been part of my life as far back as I can remember. The ability to get into a car and just drive anywhere has never ceased to excite me. By age 28, I had solo road tripped through every single one of the Lower 48 with countless stories to have lived and later told.',
    description2: 'I-10 (Santa Monica, CA to Jacksonville, FL) and I-95 (Houlton, ME to Miami, FL) are two complete interstates I can say with confidence I\'ve done solo at least once. As I\'ve gotten older, I haven\'t camped on the side of the road or slept in rest areas as often, but that hasn\'t change my love of the road!'},

    { name: 'Connectedness', 
    pic: '/img/Connectedness.png',
    description1: '\'When someone makes a decision, he is really diving into a strong current that will carry him to places he had never dreamed of when he first made the decision.\' -Paulo Coelho, The Alchemist. The role of spirituality in my life is universal and permanent, underlying the fabric of everything I do in all arenas of my being.',
    description2: 'I hesitate to expound upon anything specific regarding my beliefs in such a public space, as spirituality is inherently personal and mine is not one of evangelization or even comparison. What I can say is that it deserves a place in a showcase of the things that make up my day to day.'},

    { name: 'Adventure', 
    pic: '/img/bw.png',
    description1: 'My sister took a snapshot of me filtering drinking water at one of our campsites two days canoe travel into the Boundary Waters in 2015. One of my favorite quotes is \'Life is daring adventure or nothing at all.\' by Helen Keller. The vastness of this world and the adventures to be had around every corner, the mountains to see and the rivers to ford- it can be overwhelming at times. I am so fortunate to have had opportunities to explore as much as I have.',
    description2: 'I climbed Mt. Fuji in Japan at age 14 and summitted Mt. Kilimanjaro in Tanzania eleven years later at age 25. Between and beyond those experiences I\'ve explored forests and mountains and deserts. Adventure will always be part of my being.'}
]