const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>hello</p>');
window = dom.window;
document = window.document;
location = window.location;
navigator = window.navigator;