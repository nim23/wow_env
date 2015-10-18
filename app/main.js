'use strict';
require('electron-reload')(__dirname);
let menuBar = require('menubar');
let mb = menuBar({
	index: 'file://' + __dirname + '/index.html'
});

mb.on('ready', () => {
	console.log('App loaded');
});
