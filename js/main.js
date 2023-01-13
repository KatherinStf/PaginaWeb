$(document).ready(function() {

});

$(function() {
    'use strict';
    console.log("listo!");
    $('.btn_new').colorbox({ inline: true, width: "50%" });

    //dejar de modo estatico el buscador principal 
    var windowsHeight = $(window).height();
    var barraAltura = $('.contenidoBuscador').innerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        //  console.log(scroll);
        if (scroll > windowsHeight) {
            $('.contenidoBuscador').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.contenidoBuscador').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });


});