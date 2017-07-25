var initialCats = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "img/22252709_010df3379e_z.jpg",
        imgAttribution: 'https://www.flicker.com/photos/bigcats/',
        nickNames: ['buddy', 'Snuggly', 'Fuzzy']
    },
    {
        name: "Frank",
        clickCount: 0,
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        imgAttribution: 'https://www.flicker.com/photos/bigcats/',
        nickNames: ['buddy', 'Snuggly', 'Fuzzy']
    },
    {
        name: "George",
        clickCount: 0,
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        imgAttribution: 'https://www.flicker.com/photos/bigcats/',
        nickNames: ['buddy', 'Snuggly', 'Fuzzy']
    },
    {
        name: "Little",
        clickCount: 0,
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        imgAttribution: 'https://www.flicker.com/photos/bigcats/',
        nickNames: ['buddy', 'Snuggly', 'Fuzzy']
    },
    {
        name: "Skittle",
        clickCount: 0,
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        imgAttribution: 'https://www.flicker.com/photos/bigcats/',
        nickNames: ['buddy', 'Snuggly', 'Fuzzy']
    }
];


function ViewModel() {
    var self = this;

    this.changeCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    })

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observable (data.nickNames);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'NewBorn';
        } else if (clicks < 20) {
            title = 'Infant';
        } else if (clicks < 30) {
            title = 'Teen';
        } else {
            title = 'Lion';
        }
        return title;
    }, this);
};


ko.applyBindings(new ViewModel());
