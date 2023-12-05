jQuery(document).ready(function($) {
    var ppp = 6; // Post per page
    var pageNumber = 1;


    function load_posts() {
        pageNumber++;
        var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_post_ajax';
        $.ajax({
            type: "POST",
            dataType: "html",
            url: ajax_posts.ajaxurl,
            data: str,
            success: function(data) {
                var $data = $(data);
                if ($data.length) {
                    $(".load_more_posts").append($data);
                    //$("#more_posts").attr("disabled",false); // Uncomment this if you want to disable the button once all posts are loaded
                    //$("#more_posts").hide(); // This will hide the button once all posts have been loaded
                } else {
                    $("#more_posts").attr("disabled", true);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }

        });
        return false;
    }

    $("#more_posts").on("click", function() { // When btn is pressed.
        //$("#more_posts").attr("disabled", true); // Disable the button, temp.
        load_posts();
        $(this).insertAfter('.load_more_posts'); // Move the 'Load More' button to the end of the the newly added posts.
    });
    // $(window).on('scroll', function() {
    //     if ($('body').scrollTop() + $(window).height() > $('footer').offset().top) {
    //         if (!($loader.hasClass('post_loading_loader') || $loader.hasClass('post_no_more_posts'))) {
    //             load_posts();
    //         }
    //     }
    // });
});