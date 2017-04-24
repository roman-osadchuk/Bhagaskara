(function() {

    $("#image_container img").click(function(e){
        modal_img(e.target);
    });

    $("#modal_image span").click(function(){
        $("#modal_image").hide();
    });

    function modal_img(img){
        var bg_img = $(img).attr("src");
        $("#modal_image img").attr("src", bg_img);
        $("#modal_image").css({
            "display" : "block",
            "top" : "10%",
            "left" : "20%",
            "width" : "60%",
            "height" : "80%"
        });
    }

})();