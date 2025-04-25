$(document).ready(function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    $(".next").click(function () {
        showSlides(slideIndex += 1);
    });

    $(".prev").click(function () {
        showSlides(slideIndex -= 1);
    });

    // Thumbnail image controls
    $(".demo").click(function () {
        let newIndex = $(this).index() + 1;
        showSlides(slideIndex = newIndex);
    });

    function showSlides(n) {
        let slides = $(".mySlides");
        let dots = $(".demo");
        let captionText = $("#caption");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        slides.hide();
        dots.removeClass("active");

        slides.eq(slideIndex - 1).show();
        dots.eq(slideIndex - 1).addClass("active");

        captionText.text(dots.eq(slideIndex - 1).attr("alt"));
    }
});