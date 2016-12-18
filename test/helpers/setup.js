require('babel-register')
require('babel-polyfill')
// global is the window of node
// this creates a new browser like env each time it is run
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
