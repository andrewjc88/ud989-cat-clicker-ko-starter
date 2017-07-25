function ViewModel() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('https://www.flicker.com/photos/bigcats/');
    this.nickNames = ko.observable (['buddy', 'Snuggly', 'Fuzzy']);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

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
