$(document).ready(function () {

    var galleries = [];
    $(".gallery").each(function(i, obj) {
        galleries.push(obj);
        $(obj).attr('id',   this.id + '_' + i);
    });

    galleries.forEach(function(obj) {
        $(obj).unitegallery({
            tiles_type:"justified",
            tile_enable_textpanel: true,
            tile_textpanel_source: "alt"
        });
    }); 
});