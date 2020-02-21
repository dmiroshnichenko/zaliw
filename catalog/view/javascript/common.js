$(document).ready(function () {
	console.log ('common.js');
    if ($(window).width() <= 767 && $('.product-info').size()) {
        $('.options').insertBefore($('.second .description .price')).removeClass('xs-hidden');
    }
    $('.button-search').bind('click', function () {
        var filter_name = $('#search input[name=\'filter_name\']').attr('value');
        var mob_clicker = document.getElementById("#mob-menu");
        if(mob_clicker){
            mob_clicker.checked = false;
        }
        if (filter_name) {
            url = $('base').attr('href') + 'index.php?route=product/search';
            url += '&filter_name=' + encodeURIComponent(filter_name);
            location = url;
        }
    });
    $('#search input[name=\'filter_name\'], #right-search input[name=\'filter_name\']').bind('keydown', function (e) {
	    console.log ('s');
        if (e.keyCode == 13 && this.value) {
            url = $('base').attr('href') + 'index.php?route=product/search';
            url += '&filter_name=' + encodeURIComponent(this.value);
            location = url;
        }
    });
    $('#search input[name=\'filter_name\']').bind('focus', function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    })
    $('#search input[name=\'filter_name\']').bind('blur', function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    })
    $('.box-heading-checkbox').live('mouseenter', function () {
        $('.checkboxDiv').removeClass('active');
        box = $(this).next().addClass('active');
    });
    $('.box-heading-checkbox .checkboxDiv').live('mouseleave', function () {
        box = $(this).next().removeClass('active');
    });
    $('#cart > .heading a').live('mouseenter', function () {
        $('#cart').addClass('active');
    //    $('#cart').load('index.php?route=module/cart #cart > *');
        $('#cart').live('mouseleave', function () {
            $(this).removeClass('active');
        });
    });
    
    $('#cart').live('onclick', function () {
	    console.log ('click');
	});
    
    
    $('#prod-hover').live('mouseenter', function () {
        $(this).addClass('active');
    });
    $('#prod-hover').live('mouseleave', function () {
        $(this).removeClass('active');
    });
    $('#menu ul > li > a + div').each(function (index, element) {
        if ($.browser.msie && ($.browser.version == 7 || $.browser.version == 6)) {
            var category = $(element).find('a');
            var columns = $(element).find('ul').length;
            $(element).css('width', (columns * 143) + 'px');
            $(element).find('ul').css('float', 'left');
        }
        var menu = $('#menu').offset();
        var dropdown = $(this).parent().offset();
        i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());
        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });
    if ($.browser.msie) {
        if ($.browser.version <= 6) {
            $('#column-left + #column-right + #content, #column-left + #content').css('margin-left', '195px');
            $('#column-right + #content').css('margin-right', '195px');
            $('.box-category ul li a.active + ul').css('display', 'block');
        }
        if ($.browser.version <= 7) {
            $('#menu > ul > li').bind('mouseover', function () {
                $(this).addClass('active');
            });
            $('#menu > ul > li').bind('mouseout', function () {
                $(this).removeClass('active');
            });
        }
    }
    $('.success img, .warning img, .attention img, .information img').live('click', function () {
        $(this).parent().fadeOut('slow', function () {
            $(this).remove();
        });
    });
    if ($("#container-main")) {
        window.onload = function () {
            $('.slider-wrapper .ws_images img').outerHeight($("#container-main").outerHeight());
            $('#wowslider-container1 .ws_images').css({
                'height': $("#container-main").outerHeight(),
                'max-height': $("#container-main").outerHeight()
            });
            $('.slider .ws_images img').each(function (index, element) {
                element.style.height = $("#container-main").outerHeight() + "px";
            });
            $('.slider-wrapper .ws_images img').outerHeight($("#container-main").outerHeight());
            $('#wowslider-container1 .ws_images').css({
                'height': $("#container-main").outerHeight(),
                'max-height': $("#container-main").outerHeight()
            });
        };
        $(window).on('resize', function (event) {
            if ($("#container-main")) {
                $('.slider-wrapper .ws_images img').outerHeight($("#container-main").outerHeight());
                $('#wowslider-container1 .ws_images').css({
                    'height': $("#container-main").outerHeight(),
                    'max-height': $("#container-main").outerHeight()
                });
            }
        })
        $('.dostavka-block .row h3').click(function () {
            if ($(document.body).width() <= 768) {
                $(this).toggleClass('active').next().slideToggle();
            }
        })
    }
    $('.prices .nav-list li').click(function (event) {
        var that = this;
        var index = 0;
        var parent = that.parentNode;
        for (var i = 0; i < this.parentNode.children.length; i++) {
            if (that == parent.children[i]) {
                index = i;
                that.classList.add('active');
            } else {
                parent.children[i].classList.remove('active');
            }
        }
        $(this).closest('.prices').find('.desc .dynamic').removeClass('active').eq(index).addClass('active');
        $(this).closest('.prices').find('.dynamic-img img').removeClass('active').eq(index).addClass('active');
    })
    $(window).scroll(function (event) {
        var scrollTop = $(document.body).scrollTop();
        if (!scrollTop) {
            scrollTop = Math.abs(document.body.getBoundingClientRect().top);
        }
        if (scrollTop > 0.35 * $(window).height()) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    })
    $('.scroll-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    })
    if ($('.simpleregister .row .form-group').size()) {
        var size = $('.simpleregister .row .form-group').size();
        $('.simpleregister .row .form-group').each(function (index, val) {
            if (index < Math.ceil(size / 2)) {
                $(this).addClass('left');
            } else {
                $(this).addClass('right');
            }
        })
        var div_left = document.createElement('div');
        var div_right = document.createElement('div');
        div_left.className = 'col-lg-11';
        div_right.className = 'col-lg-11 col-lg-offset-2';
        $('.simpleregister .row').append(div_left);
        $('.simpleregister .row').append(div_right);
        $('.simpleregister .row .left').prependTo(div_left);
        $('.simpleregister .row .right').prependTo(div_right);
    }
});
$(function () {
    $(".product-info .option-image img").click(function () {
        $(".product-info .option-image img").removeClass("active");
        $(this).addClass("active");
    });
});
function getURLVar(urlVarName) {
    var urlHalves = String(document.location).toLowerCase().split('?');
    var urlVarValue = '';
    if (urlHalves[1]) {
        var urlVars = urlHalves[1].split('&');
        for (var i = 0; i <= (urlVars.length); i++) {
            if (urlVars[i]) {
                var urlVarPair = urlVars[i].split('=');
                if (urlVarPair[0] && urlVarPair[0] == urlVarName.toLowerCase()) {
                    urlVarValue = urlVarPair[1];
                }
            }
        }
    }
    return urlVarValue;
}
function addToCart(product_id, quantity) {
    quantity = typeof(quantity) != 'undefined' ? quantity : 1;
    $.ajax({
        url: 'index.php?route=checkout/cart/add',
        type: 'post',
        data: 'product_id=' + product_id + '&quantity=' + quantity,
        dataType: 'json',
        success: function (json) {
            $('.success, .warning, .attention, .information, .error').remove();
            if (json['redirect']) {
                location = json['redirect'];
            }
            if (json['success']) {
                $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                $('.success').fadeIn('slow');
                $('#cart-total').html(json['total']);
                $('html, body').animate({scrollTop: 0}, 'slow');
            }
        }
    });
}
function addToWishList(product_id) {
    $.ajax({
        url: 'index.php?route=account/wishlist/add',
        type: 'post',
        data: 'product_id=' + product_id,
        dataType: 'json',
        success: function (json) {
            $('.success, .warning, .attention, .information').remove();
            if (json['success']) {
                $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                $('.success').fadeIn('slow');
                $('#wishlist-total').html(json['total']);
                $('html, body').animate({scrollTop: 0}, 'slow');
            }
        }
    });
}
function addToCompare(product_id) {
    $.ajax({
        url: 'index.php?route=product/compare/add',
        type: 'post',
        data: 'product_id=' + product_id,
        dataType: 'json',
        success: function (json) {
            $('.success, .warning, .attention, .information').remove();
            if (json['success']) {
                $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                $('.success').fadeIn('slow');
                $('#compare-total').html(json['total']);
                $('html, body').animate({scrollTop: 0}, 'slow');
            }
        }
    });
}
$(window).load(function () {
    if ($('div').is('.product-list')) {
        $('.product-list').each(function () {
            var maxElemHeight = 0;
            $('> div', this).each(function () {
                if ($(this).height() > maxElemHeight) {
                    maxElemHeight = $(this).height();
                }
            });
            $('> div', this).height(maxElemHeight - 55);
        });
        (function () {
            var limit = 3;
            var offset = 9;
            var minimum = 9;
            $('#box-catalog .buttons a').click(function (event) {
                event.preventDefault();
                var category_id = $(this).attr('data-id');
                var that = this;
                if ($(this).hasClass('btn-hide')) {
                    offset -= limit;
                    for (var i = limit; i > 0; i--) {
                        $('#box-catalog > div:not(.buttons)').eq($('#box-catalog > div:not(.buttons)').length - 1).remove();
                    }
                    $(that).closest().show();
                    if (!(offset > minimum)) {
                        $(that).hide();
                    }
                } else {
                    $.ajax({
                        url: '/index.php?route=product/product/catalog',
                        type: 'get',
                        dataType: 'json',
                        data: {category_id: category_id, limit: limit, offset: offset},
                        success: function (data, textStatus, jqXHR) {
                            if (data.status == 'success' && data.html) {
                                $(that).parent().before(data.html);
                                offset += limit;
                                if (offset >= data.total) {
                                    $(that).hide();
                                }
                                if (offset > minimum) {
                                    $(that).siblings().css({display: 'inline-block'});
                                }
                            }
                        },
                        error: function (data, textStatus, jqXHR) {
                        }
                    })
                }
            })
        })()
    }
});