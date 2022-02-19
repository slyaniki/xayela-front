var iconOpen = document.querySelector('.icon-menu');
var iconClose = document.querySelector('.icon_close')
var sidebar = document.querySelector('.list-menu');

if(iconOpen) {
    iconOpen.addEventListener('click', function(e){
        e.stopPropagation()
        sidebar.classList.add('active')
    })

    iconClose.addEventListener('click', function(){
        sidebar.classList.remove('active')
    })

    sidebar.addEventListener('click', function(e){
        e.stopPropagation()
    })
    
    window.addEventListener('click', function(e){
        e.stopPropagation()
        sidebar.classList.remove('active')
    })
}

var avatar = document.querySelector('.avatar');
var b_user = document.querySelector('.b_user');

if(avatar) {
    avatar.addEventListener('click', function(e){
        e.stopPropagation()
        b_user.classList.toggle('active')
    })

    b_user.addEventListener('click', function(e){
        e.stopPropagation()
    })
    
    window.addEventListener('click', function(e){
        e.stopPropagation()
        b_user.classList.remove('active')
    })
}

var btn_filter = document.querySelector('.btn_filter');
var b_filtre = document.querySelector('.b_filtre');

if(btn_filter) {
    btn_filter.addEventListener('click', function(e){
        e.stopPropagation()
        b_filtre.classList.toggle('active')
    })

    b_filtre.addEventListener('click', function(e){
        e.stopPropagation()
    })
    
    window.addEventListener('click', function(e){
        e.stopPropagation()
        b_filtre.classList.remove('active')
    })
}



$('#header_carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 6000,
    smartSpeed: 6000,
    items: 1,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#testimonial_carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout: 10000,
    smartSpeed: 3000,
    items: 1,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.navigation').addClass('bg-white')
    }
    else{
        $('.navigation').removeClass('bg-white')
    }
})

// faire afficher le button return top
var btnTop = document.getElementById('btnReturn')
btnTop.onclick = function () {
    window.scrollTo(pageXOffset, 0);
};
window.addEventListener('scroll', function () {
    btnTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

// loader js
var time = setInterval(() => {
    if (document.readyState == "complete") {
        $(".preloader").addClass('preloaderFinish');
        clearInterval(time);
    }
}, 1500)