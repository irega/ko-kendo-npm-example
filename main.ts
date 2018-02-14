import * as ko from 'knockout';
import 'knockout-kendo/build/knockout-kendo';

class ViewModel {
    public choices: KnockoutObservableArray<string>;
    public selectedChoice: KnockoutObservable<string>;

    constructor() {
        this.choices = ko.observableArray(["apple", "orange", "banana"]);
        this.selectedChoice = ko.observable();
    }
};

ko.applyBindings(new ViewModel(), document.getElementById('container'));