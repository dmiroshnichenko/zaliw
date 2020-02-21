$(document).ready(function(){
    $('.product_block_hover_1').click(function(e){
        $('.ataman_more-modal').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.product_block_ataman').click(function(e){
        $('.ataman_buy').modal();
        e.stopPropagation();
    });
    $('.product_block_hover_2').click(function(e){
        $('.skif_more-modal').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.product_block_skif').click(function(e){
        $('.skif_buy').modal();
        e.stopPropagation();
    });
    $('.product_block_hover_3').click(function(e){
        $('.aslan_more-modal').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.product_block_aslan').click(function(e){
        $('.aslan_buy').modal();
        e.stopPropagation();
    });
    $('.product_block_hover_4').click(function(e){
        $('.rimskiy_more-modal').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.product_block_rimskiy').click(function(e){
        $('.rimskiy_buy').modal();
        e.stopPropagation();
    });
    $('.product_block_hover_5').click(function(e){
        $('.persidskiy_more-modal').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.product_block_persidskiy').click(function(e){
        $('.persidskiy_buy').modal();
        e.stopPropagation();
    });



    $('.procurement-block-1').click(function(e){
        $('.setka_2x_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-1-1').click(function(e){
        $('.setka_2x_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-2').click(function(e){
        $('.nabor_4in1_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-2-2').click(function(e){
        $('.nabor_4in1_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-3').click(function(e){
        $('.case_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-3-3').click(function(e){
        $('.case_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-4').click(function(e){
        $('.jarootsek_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-4-4').click(function(e){
        $('.jarootsek_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-5').click(function(e){
        $('.shampur_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-5-5').click(function(e){
        $('.shampur_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-6').click(function(e){
        $('.ternometer_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-6-6').click(function(e){
        $('.ternometer_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-7').click(function(e){
        $('.tachka_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-7-7').click(function(e){
        $('.tachka_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-8').click(function(e){
        $('.kryk_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-8-8').click(function(e){
        $('.kryk_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-9').click(function(e){
        $('.kazan_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-9-9').click(function(e){
        $('.kazan_consult').modal();
        e.stopPropagation();
    });
    $('.procurement-block-10').click(function(e){
        $('.schepci_buy').modal();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.procurement-block-10-10').click(function(e){
        $('.schepci_consult').modal();
        e.stopPropagation();
    });
});





$('.pseudo-video').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xdkjXk9sNMg?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudo-video-skif').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xdkjXk9sNMg?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudovideo-modal-skif').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8KXuvXY3RhM?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudovideo-modal-ataman').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/QW1eXHMX-Ig?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudovideo-modal-aslan').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SzuJu-JvUlo?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudovideo-modal-rimskiy').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7ApsSYYDW1w?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudovideo-modal-persidskiy').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7LibmWeQ4GE?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudo-video-rozjih').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KdRs8_Y4AF8?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudo-video-kyrica-rimskiy').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RfKviXBD3Xk?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudo-video-ataman-otziv').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/vPG4W1ucjpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
});

$('.pseudo-video-skif-otziv').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/noPFuwH7-DA?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$('.pseudo-video-aslan-oziv').on('click', function(e){
    id = $(this).attr('youtubeid');
    $(this).replaceWith('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7z5aGZEfXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
});

$(document).ready(function () {
    $('.product-modal_slider-wrapper').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:0,
        dots:false,
        responsiveClass:true,
        lazyLoad: false,
        autoHeight:true,
        autoplay:false,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        animateOut: 'String',
    });
});



$(document).ready(function () {
    $(".luxury_slider-carousel").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoHeight:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:true,
        dotsEach:1,
        animateOut: 'fadeOut',
        // slideTransition:fadeIn,
        nav:true,
        navText: ['<i><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g clip-path="url(#clip0)">\n' +
        '<path d="M22.6394 11.8546L16.0924 18.4016C15.693 18.801 15.0451 18.801 14.6457 18.4016C14.2462 18.0021 14.2462 17.3544 14.6457 16.9549L19.4464 12.1542H1.96145C1.39652 12.1542 0.938477 11.6961 0.938477 11.1312C0.938477 10.5664 1.39652 10.1083 1.96145 10.1083H19.4464L14.6458 5.30758C14.2463 4.90805 14.2463 4.26039 14.6458 3.86086C14.8455 3.66126 15.1074 3.56125 15.3692 3.56125C15.631 3.56125 15.8928 3.66126 16.0926 3.86086L22.6394 10.4079C23.0389 10.8074 23.0389 11.4551 22.6394 11.8546Z" fill="#333333"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<clipPath id="clip0">\n' +
        '<rect width="22.0005" height="22.0005" fill="white" transform="matrix(1 0 0 -1 0.938477 22.0012)"/>\n' +
        '</clipPath>\n' +
        '</defs>\n' +
        '</svg></i>','<i><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g clip-path="url(#clip0)">\n' +
        '<path d="M22.6394 11.8546L16.0924 18.4016C15.693 18.801 15.0451 18.801 14.6457 18.4016C14.2462 18.0021 14.2462 17.3544 14.6457 16.9549L19.4464 12.1542H1.96145C1.39652 12.1542 0.938477 11.6961 0.938477 11.1312C0.938477 10.5664 1.39652 10.1083 1.96145 10.1083H19.4464L14.6458 5.30758C14.2463 4.90805 14.2463 4.26039 14.6458 3.86086C14.8455 3.66126 15.1074 3.56125 15.3692 3.56125C15.631 3.56125 15.8928 3.66126 16.0926 3.86086L22.6394 10.4079C23.0389 10.8074 23.0389 11.4551 22.6394 11.8546Z" fill="#333333"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<clipPath id="clip0">\n' +
        '<rect width="22.0005" height="22.0005" fill="white" transform="matrix(1 0 0 -1 0.938477 22.0012)"/>\n' +
        '</clipPath>\n' +
        '</defs>\n' +
        '</svg></i>'],
        responsive: {
            0: {
                nav:true,
                dots:true,
                items: 1,
            },
            768: {
                nav:true,
                items: 1,
            },
            992: {
                items: 1,
                nav:true,
            }
        }
    });
});

$('.accessories_item-link ul li').each (function (i, e){
    $(e).hover(function (ev) {

        // $('.accessories_item-link ul li').click('.gallery_list_active');
        $('.accessories_item-link ul li').removeClass('gallery_list_active').eq(i).addClass('gallery_list_active');

        $('.zblock').hide();


        $('.zblock'+i).stop().show();
    });
});

/*timer*/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
            initializeClock('countdown', deadline);
        }

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 3 * 18 * 60 * 60 * 1000);
initializeClock("countdown", deadline);



$('.catalog_slider').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    thumbs: true,
    thumbsPrerendered: true,
    items:1,
    autoHeight:false
});

$('.modal-bay-btn').click(function(){
    $('.form-close .close').click();
});



$('.catalog_subslider_thumbs .thumb-item').each(function (i, e) {

    $(this).click (function (e){
        var index = $(this).index(); //- индекс тумбы
        $(this).parent().find('.thumb-item').removeClass('active').eq(index).addClass('active');
        $(this).parent().find('iframe').replaceWith($(this).parent().find('iframe').html());
        $(this).parent().parent().find('.item').fadeOut().eq(index).fadeIn();
    })

});

/*form*/

$(function($){
    $('input[name="phone"]').mask("+38(999) 99-99-999");
});

$('#form_product_buy_ataman').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

    if (document.form_product_buy_ataman.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_buy_skif').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_skif.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_buy_aslan').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_aslan.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_buy_rimskiy').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_rimskiy.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_buy_persidskiy').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_persidskiy.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_buy_setka_2x').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_setka_2x.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_setka_2x_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_setka_2x_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_nabor_4in1').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_nabor_4in1.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_nabor_4in1_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_nabor_4in1_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_case').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_case.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_case_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_case_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_jarootsek').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_jarootsek.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_jarootsek_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_jarootsek_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_shampur').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_shampur.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_shampur_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_shampur_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_ternometer').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_ternometer.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_ternometer_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_ternometer_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_tachka').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_tachka.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_tachka_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_tachka_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_kryk').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_kryk.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_kryk_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_kryk_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_kazan').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_kazan.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_kazan_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_kazan_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});


$('#form_product_buy_schepci').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_buy_schepci.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_product_schepci_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_product_schepci_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#header_sale_form_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.header_sale_form_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_callback_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_callback_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_callback_md_present_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_callback_md_present_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_callback_col_present_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_callback_col_present_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_choice_modal_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_choice_modal_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_callback_col_discount_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_callback_col_discount_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_time_send').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_time_send.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_trust_consult').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_trust_consult.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

$('#form_header_callback').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form_header_callback.phone.value == '' ) {
        valid = false;
        return valid;
    }
    var page_link = window.location;
    $('input[name="url"]').val(page_link);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()

    }).done(function() {
        window.location.href = "https://tandyr-art.in.ua/thankyou.html";
    });
    return false;
});

/*form*/

// jQuery(document).ready(function() {
//     jQuery(".eTimer").eTimer({
//         etType: 2, etDate: "24.10.2019.0.0", etTitleText: "", etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: "Open Sans", etTextColor: "#ffb800", etPaddingTB: 15, etPaddingLR: 15, etBackground: "transparent", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "transparent", etShadow: " 0px 0px 0px 0px transparent", etLastUnit: 4, etNumberFontFamily: "Open Sans", etNumberSize: 28, etNumberColor: "#333333", etNumberPaddingTB: 0, etNumberPaddingLR: 6, etNumberBackground: "#fcfcfc", etNumberBorderSize: 0, etNumberBorderRadius: 0, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 0px 0px transparent"
//     });
// });


$("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
});

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            // this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if(!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
});

