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

$('.mosaicgallery').mosaicflow({
  itemSelector: '.mosaicflow__item',
  minItemWidth: 300
});