var width = $(window).width() - 240;
var height = $(window).height() - 350;

function run() {
    var top = Math.random() * height;
    var left = Math.random() * width;
    $('.joker').css('top', top + 'px').css('left', left + 'px');
}

$(document).ready(function() {
    $('.joker').mouseover(run);
    $('.joker').mousemove(run);
});


var width = $(window).width() - 240;
var height = $(window).height() - 350;

function run() {
    var top = Math.random() * height;
    var left = Math.random() * width;
    $('.joker').css('top', top + 'px').css('left', left + 'px');
}

$(document).ready(function() {
    $('.joker').mouseover(run);
    $('.joker').mousemove(run);
});

