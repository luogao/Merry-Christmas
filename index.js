import Swiper from 'swiper';
import './node_modules/swiper/dist/css/swiper.min.css'
import './src/css/common.css'
import './src/css/font.css'
import './src/css/layout.scss'

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    direction: 'vertical'
});

$(function() {
    $('body').on('click', '.image', function() {
        $('.trigger-button').fadeOut(200, function() {
            $(this).parents('.image').addClass('open')
        })
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