// Optional: Add jQuery animations for additional effects
$(document).ready(function() {
    $('.product-item').hover(function() {
        $(this).find('.product-image').animate({ opacity: 0.7 }, 200);
        $(this).find('.product-details').slideDown(200);
    }, function() {
        $(this).find('.product-image').animate({ opacity: 1 }, 200);
        $(this).find('.product-details').slideUp(200);
    });
});
