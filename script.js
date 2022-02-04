$(document).on("click", ".nav__menu-btn", (e) => {
    $(".nav__menu-btn").toggleClass("active");
    $("#about-menu").removeClass("active-menu");
    $("#doors-menu").removeClass("active-menu");
    $("#windows-menu").removeClass("active-menu");
});

$(document).on("click",".nav__search-btn-i",  (e) => {
    e.preventDefault();
    $(".search-form__input").focus();
    $(".nav__menu-btn").toggleClass("active");
    $('.header__nav, .main-content, footer').animate({left: '390px'}, 200); 
});

$(document).on("click","#product",  (e) => {
    $(".nav__menu-btn").toggleClass("active");
    $('.header__nav, .main-content, footer').animate({left: '390px'}, 200);    
});

$(document).on("click", "#windows", (e) => {
    $("#windows-menu").addClass("active-menu");
});

$(document).on("click", "#doors", (e) => {
    $("#doors-menu").addClass("active-menu");
});

$(document).on("click", "#about", (e) => {
    $("#about-menu").addClass("active-menu");    
});

$(document).on("click", "#company", (e) => {
    $("#about-menu").addClass("active-menu");
    $(".nav__menu-btn").toggleClass("active");
    $('.parent').addClass('desktop');
    $('.header__nav, .main-content, footer').animate({
        left: '390px'
        }, 200);  
});

$(document).on("click", ".nav__side-menu-1-bar", (e) => {
    $(".nav__side-menu-1").removeClass("active-menu");
    $(".parent").removeClass("desktop");
});

$(document).on('click',".js-tab-trigger " , function(){
    let tabName = $(this).data('tab'),
    tab = $('.js-tab-content[data-tab="'+ tabName+'"]');
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    $('.js-tab-content.active').removeClass('active');
    tab.addClass('active');
});

$(document).on("click","#buy", function() {
    $('.popup').addClass('open')
});

$(document).on("click", "#where", function() {
    $('.popup').addClass('open')
});

$(document).on("click",".popup__close", function() {
    $('.popup').removeClass('open');
});

$(document).mouseup( function(e){ 
    let div = $( ".popup__inner" ); 
    if ( !div.is(e.target) && div.has(e.target).length === 0 ) { 
        $('.popup').removeClass('open');; 
    }
});

$(function() {
    $(window).resize(function() {
        var width = $(window).outerWidth();
        if (width < 1120) {
            $('.nav__menu-btn--hide').click(function() { 
                    $(".header__head").addClass("move");
                });
            $('.nav__menu-btn--show').click(function() { 
                $(".header__head").removeClass("move");
                });
        } else{
            $('.nav__menu-btn--hide').click(function() { 
                $(".header__head").removeClass("move");
            });
        $('.nav__menu-btn--show').click(function() { 
            $(".header__head").removeClass("move");
            });
        }
    });
 
	$(window).resize();
});

let main = function() { 
    $('.nav__menu-btn--hide').click(function() {  
    $('.header__nav, .main-content, footer').animate({
        left: '390px'
        }, 200);        
    });
    $('.nav__menu-btn--show').click(function() { 
    $('.header__nav, .main-content, footer').animate({
            left: '0px'
        }, 200); 
    });
   
};

$(document).ready(main); 




