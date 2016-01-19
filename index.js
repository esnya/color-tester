'use strict';

const space = require('color-space');

var button = document.getElementById('button');
var text = document.getElementById('text');
var range = document.getElementById('range');
var rangeLabel = document.getElementById('rangeLabel');
var list = document.getElementById('list');

var updateRangeLabel = function() {
    rangeLabel.innerHTML = 'y: 0 - ' + (+range.value) / 10;
};
range.addEventListener('change', updateRangeLabel);
range.addEventListener('keyup', updateRangeLabel);
updateRangeLabel();

button.addEventListener('click', function() {
    var yuv = [
        Math.random() * (+range.value) / 10,
        Math.random() - 0.5,
        Math.random() - 0.5,
    ];
    var color = space.yuv.rgb(yuv).map(a => Math.round(a));
    console.log(yuv, color);
    
    var item = document.createElement('div');
    item.innerHTML = (text.value || '') + ' [' + yuv.join(',') + '] > [' + color.join(',') + ']';
    item.style.color = 'rgb(' + color.join(',') + ')';
    list.insertBefore(item, list.firstElementChild);
});