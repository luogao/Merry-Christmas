import Swiper from 'swiper';
import './node_modules/swiper/dist/css/swiper.min.css'
import './src/css/common.css'
import './src/css/font.css'
import './src/css/layout.scss'
import './src/css/animate.css'
import './src/css/jquery.fallingsnow.css'
import dynamicTxtFn from './src/js/dynamicTxt'
import snow from './src/js/snow'


var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    allowSlideNext: false,
    allowSlidePrev: false,
    direction: 'vertical'
});

let myPromise = function(fn, interval) {
    return new Promise((resolve, reject) => {
        let timer = null;
        let context = this;
        let args = arguments;
        timer = setTimeout(() => {
            fn.apply(context, args)
            clearTimeout(timer)
            resolve()
        }, interval);
    })
}

$(function() {
    $('body').on('click', '.trigger-button', function() {
        $(this).fadeOut(200, function() {
            $(this).parents('.image').addClass('open')
        })
    })
    $('body').on('click', '.section1 .letter', function() {
        mySwiper.allowSlideNext = true;
        mySwiper.slideNext(500)
        myPromise(function() {
                $('#dear').show()
            }, 300)
            .then(myPromise(function() {
                // document.getElementById('myAudio').play()
                snow()
                dynamicTxtFn().then(() => {
                    console.log('finish')
                    $('#dear').addClass('finish');
                    myPromise(() => {
                        $('.letter-stamp').show()
                    }, 300).then(myPromise(() => {
                        $('.section2 .img-04').show()
                    }, 500)).then(myPromise(() => {
                        $('.section2 .img-04').addClass('swing')
                    }, 1500))
                })
            }, 900))
        mySwiper.allowSlideNext = false;
        mySwiper.allowSlidePrev = true;
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