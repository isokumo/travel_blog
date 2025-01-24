$(document).ready(function(){
    $('.main>li').hover(function(){
        if($(this).find('i').hasClass('ri-arrow-down-s-line')){
            $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line')
        }else{
            $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line')
        }
        $(this).find('.sub').fadeToggle(800);
    });

    $('.myvideo').on('mouseenter', function(){
        this.play();
    });

    $('.myvideo').on('mouseleave', function(){
        this.pause();
    })

    // $(".myvideo").mouseenter(function() {
    //     this.play();
    // });   이렇게도 가능!

    $(".myvideo-btn").on("click", function(){
        const vdo = $(this).data("vdo");

        //소스선택
        const $vdo = $("#viewvideo");
        const $source = $vdo.find('source')

        $source.attr("src", "vod/" + vdo);
        $vdo[0].load();


        // $('#viewvideo').find("source").attr("src","vod/"+ vdo);

        $('.vdo-popup-back').fadeIn(400);
    });

    $('.close').click(function(){
        $('.vdo-popup-back').fadeOut(500);
    });

});