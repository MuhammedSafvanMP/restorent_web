$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4, // Show 4 items in the carousel
        loop: true, // Infinite loop
        margin: 0, // Remove margin between items
        autoplay: true, // Autoplay the carousel
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive:{
            0:{
                items: 1, // Show one item on mobile
                center: true, // Center the item
            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    });
});