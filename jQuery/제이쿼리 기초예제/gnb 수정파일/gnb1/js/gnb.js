$(document).ready(function(){
    $('#gnb>li').on({
        mouseover:function(){
            var num=$(this).index();
            $(this).each(function(){
                if(num==$(this).index())
                $(this).find('img').css({
                    'marginTop':'-29px'
                })
                $(this).children('.sgnbarea').css({
                    'display':'block'
                })
            })
            $('#gnbwrap').stop().animate({
                height:'60px'
            })
        },
        mouseout:function(){
            var num=$(this).index();
            $(this).each(function(){
                if(num==$(this).index())
                $(this).find('img').css({
                    'marginTop':'0px'
                })
                $(this).children('.sgnbarea').css({
                    'display':'none'
                })
            })
            $('#gnbwrap').stop().animate({
                height:'29px'
            })
        }
    })

    $('#gnb > li').each(function(){
        var sublist=$(this).find('.sgnbarea>ul>li')
        sublist.on({
            mouseover:function(){
                $(this).addClass('on')
            },
            mouseout:function(){
                $(this).removeClass('on')
            }
        })
    })
})