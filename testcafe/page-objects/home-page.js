import { Selector } from 'testcafe';

const label = Selector('label');

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

export default class Page {
    constructor () {
        this.title                 = Selector("title");
    }
}
