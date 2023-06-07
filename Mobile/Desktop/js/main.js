$(document).ready(function(){
    $('.visual_btn a').on('click',function(e){
        e.preventDefault();
        $('.visual_btn a').removeClass('on');
        $(this).addClass('on');
        var i = $(this).index();
        $('.visual_box_wrap .visual_text').removeClass('on');
        $('.visual_box_wrap .visual_text:eq('+i+')').addClass('on');
    })

    $('.notice li a').on('click',function(e){
        e.preventDefault();
        $('.notice li a').removeClass('on');
        $(this).addClass('on');
        var i = $(this).parent().parent().index();
        $('.notice .notice_list').removeClass('now');
        $('.notice .notice_list:eq('+i+')').addClass('now');
    })

    $('.news li a').on('click',function(e){
        e.preventDefault();
        $('.news li a').removeClass('on');
        $(this).addClass('on');
        var i = $(this).parent().parent().index();
        $('.news .news_list').removeClass('now');
        $('.news .news_list:eq('+i+')').addClass('now');
    })

    /*$('.active_btn h3').on('click',function(){
        $(this).parent().find('ul').toggleClass('opened');
    })*/

    $('.active_btn h3').on('click',function(){
        if($(this).parent().find('ul').hasClass('opened')==true){
            $(this).parent().find('ul').slideUp(400);
            $(this).parent().find('ul').removeClass('opened');
        }else{
            $(this).parent().find('ul').slideDown(400);
            $(this).parent().find('ul').addClass('opened');
        }
    })
})