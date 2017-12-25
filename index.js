import Swiper from 'swiper';
import dynamicTxtFn from './src/js/dynamicTxt'
import snow from './src/js/snow'
import './node_modules/swiper/dist/css/swiper.min.css'
import './src/css/layout.scss'

var timer = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(timer);
        $('.welcomePage').addClass('loaded')
        myPromise(() => {
            $('.welcomePage').remove()
            $('#app').show()
            var mySwiper = new Swiper('.swiper-container', {
                speed: 400,
                spaceBetween: 0,
                allowSlideNext: false,
                allowSlidePrev: false,
                direction: 'vertical'
            });
            $('body')
                .on('click', '.image', function() {
                    $(this)
                        .find('.trigger-button')
                        .fadeOut(200, function() {
                            $('.image').addClass('open')
                        })
                })
            $("body").on('click', '[class^="photo-"]', function() {
                if ($(this).hasClass('zoom')) {
                    $('[class^="photo-"]').removeClass('zoom')
                } else {
                    $('[class^="photo-"]').removeClass('zoom')
                    $(this).addClass('zoom')
                }
            })
            $('body').on('click', '.section1 .letter', function() {
                mySwiper.allowSlideNext = true;
                mySwiper.slideNext(500)
                myPromise(function() {
                    $('#dear').show()
                }, 300).then(myPromise(function() {
                    document
                        .getElementById('myAudio')
                        .play()
                    if (!$('.flake').length > 0) {
                        snow.init()
                    }
                    dynamicTxtFn().then(() => {
                        console.log('finish')
                        $('.flash').fadeOut()
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
            })
            $('body').on('click', '.img-04', function() {
                mySwiper.allowSlideNext = true;
                mySwiper.slideNext(500)
                myPromise(function() {
                    mySwiper.allowSlideNext = false;
                    Promise.all(photoshow()).then(() => {
                        console.log(123)
                        mySwiper.allowSlideNext = true;
                        mySwiper.allowSlidePrev = true;
                        $('.section3 .content-footer').show()
                    })
                }, 500)
            })

            $('body').on('click', '.letter-stamp', function() {
                if ($('.flake').length > 0) {
                    snow.destroy()
                } else {
                    snow.init()
                }
            })

            $(document).click(function(e) {
                var _con = $('.image'); // 设置目标区域
                if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                    $('.image').removeClass('open')
                    setTimeout(() => {
                        $('.trigger-button').fadeIn(200)
                    }, 500);
                }
            });
        }, 600)
    }
}, 0);



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

let photoshow = function() {
    let photoArr = ['.photo-01', '.photo-02', '.photo-03', '.photo-04', '.photo-05', '.photo-06', ]
    var APromise = photoArr.map((photo, index) => {
        return myPromise(() => {
            $(photo).show()
        }, 1000 * index)
    })
    return APromise
}