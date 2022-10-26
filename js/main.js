(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

// funcion para enviar mensajes desde la seccion del formulario
let btEnviar=document.querySelector("#hipervinculo-whatsapp")
btEnviar.addEventListener("click",enviar)

function generarLink(palabra){
    let nuevaPalabra=""
    for(i=0;i<palabra.length;i++){
        if(palabra.charAt(i)==" "){
            nuevaPalabra += "%20"
        }else{
            nuevaPalabra += palabra.charAt(i)
        }
    }
    return nuevaPalabra
}

function enviar(){
    let nombre = document.querySelector("body > div:nth-child(11) > div > div > div.col-lg-7.mb-2 > div > form > div.row > div:nth-child(1) > input")
    let asunto = document.querySelector("body > div:nth-child(11) > div > div > div.col-lg-7.mb-2 > div > form > div:nth-child(2) > input")
    let mensaje = document.querySelector("body > div:nth-child(11) > div > div > div.col-lg-7.mb-2 > div > form > div:nth-child(3) > textarea")
   btEnviar.href=`https://wa.me/50242504835?text=${generarLink(asunto.value)},%20Hola%20soy%20${generarLink(nombre.value)},%20${generarLink(mensaje.value)}`
}
