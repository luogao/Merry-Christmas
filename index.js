import Swiper from 'swiper';
import './node_modules/swiper/dist/css/swiper.min.css'
import './src/css/common.css'
import './src/css/font.css'
import './src/css/layout.scss'

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    allowSlideNext: false,
    allowSlidePrev: false,
    direction: 'vertical'
});

$(function() {
    $('body').on('click', '.trigger-button', function() {
        $(this).fadeOut(200, function() {
            $(this).parents('.image').addClass('open')
        })
    })
    $('body').on('click', '.section1 .letter', function() {
        mySwiper.allowSlideNext = true;
        mySwiper.slideNext(500)
        mySwiper.allowSlideNext = false;
    })
    $(document).mouseup(function(e) {
        var _con = $('.image'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $('.image').removeClass('open')
            setTimeout(() => {
                $('.trigger-button').fadeIn(200)
            }, 500);
        }
    });
})