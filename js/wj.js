
AOS.init();

$('.mobile_toggle_btn').on('click',function(){
    $('.gnb').stop().slideToggle();
    $('.bar').addClass('clicked');
})

$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $anchor.parent().addClass('on').siblings().removeClass('on');

    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});


$(window).scroll(function(){
    
    var scrollTopPos = $(window).scrollTop();
    if(scrollTopPos > 0){
        $("body").addClass('scroll');
    }
    else{
        $("body").removeClass('scroll')
    }
});


var dtnum = 0;

$("#interview dt").click(function(){
    clearInterval(autoDt);
    dtnum = $(this).data('num');
    interview(dtnum);
});

var autoDt = setInterval(function(){
                    dtnum++;
                    dtnum = dtnum % 5;
                    
                    interview(dtnum);
                    }, 2300);

 function interview(num){
    $("#interview dt").eq(num).toggleClass('on').siblings().removeClass('on');
}


// $(function(){
 
//     var docHeight = $(document).height();
//     var winHeight = $(window).height();
 
 
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() + winHeight >= docHeight) {
//            $("#footer").css("display", "block");
//         } else {
//             $("#footer").css("display", "none");
//         }
//     });
// });

$(function(){

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#footer").css("display", "block");
       } else {
            $("#footer").css("display", "none")
        }
        
    });

})