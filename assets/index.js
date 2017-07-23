$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "fade",
        prevText: "",
        nextText: "",
        start: function (slider) {
            slider.removeClass('loading');
        }
    });
});