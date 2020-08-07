// show password icon

$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
    } else {
        header.classList.remove("fixed-top");
    }
}



$(document).ready(function(){
    $(".owl-carousel.review-carousel").owlCarousel( {
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel.client-logo").owlCarousel( {
        dots: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });
});

