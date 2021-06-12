
$(document).ready(function(){

     
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {

        $('.top-bar-item>a').click(allallclose)

    $('.arrowbox').click(dropA)
    // $('.top-bar-item').mouseleave(closealldrop)
    function allallclose(params) {
        closealldrop()
        closemenu()
       
    }
    function closealldrop() {
        $('.dropping').css('display', 'none'),
        $('.arrowbox').removeClass('arrowboxopen'),
        $('.arrowbox').unbind('click', closedrop),
        $('.arrowbox').click(dropA)
    }
   function dropA() {
        var dropmenu = $(this).parents('.top-bar-item').children('.dropping')
        closealldrop()
        $(this).addClass('arrowboxopen'),
        dropmenu.show(200),
        $(this).unbind('click', dropA),
        $(this).click(closedrop)
        // $('.top-bar-item').mouseleave(closealldrop)
   }
    
    function closedrop() {
        $('.dropping').hide(200),
        $('.arrowbox').removeClass('arrowboxopen'),
        $(this).unbind('click',closedrop),
        $(this).click(dropA)
   }
}

 var rootElement = document.documentElement;
$('.collapse').click(collapsee);
 $('.mamarlist').find('h1').on('click', expand)
 var targeted = $(this).attr('href');
 var $id = targeted;

 function allHome(){
     $('.mamar-content').hide(),
     $($id).children('h1').removeClass('distance'),
     $('.mamarlist').children('h1').css({
         'fontSize':'22px',
         'backgroundImage': 'none',
         'border-top': 'none',
         'width': 'initial',
         'borderRadius': '0 0 0 0',
         'line-height': 'initial'
     })
 };

function expand() {
    
    let dropping = $(this).parents('.mamarlist').children('.mamar-content');
    allHome();
    $(this).css({
        'fontSize': '40px',
        'background-image': 'linear-gradient(#97D6F0, transparent)',
        'border-top': '1mm solid #0086E3',
        'width': '100%',
        'borderRadius': '20px 20px 0 0'
    }),
    $(dropping).fadeIn(300),
    console.log('expand!!!')
    $(this).unbind('click', expand)
        $(this).on('click', collapse)
    };
    function collapse(){
        allHome();
        console.log($(this).css('backgroundImage'));
        $(this).unbind('click', collapse),
        $(this).on('click', expand)
    };
    function collapsee(){
        allHome();
        console.log('collllaaaapseee');
        $('.mamarlist').find('h1').on('click', expand)
        // $('#מאמרים').scrollTo({
        //   'top': '0',
        //   'behavior': "smooth"
        // })
          
    }
    $('#mbarwrap').click(openmenu)
    $('#top-bar').mouseleave(closemenu)
    // $('#mbarwrap').mouseleave(closemenu)
    function openmenu() {
        $('#top-bar').slideDown(300),
        $('#mbarwrap').unbind('click', openmenu),
        $('#mbarwrap').click(allallclose)
   
    }
    function closemenu() {
        $('#top-bar').slideUp(300)
        $('#mbarwrap').unbind('click', closemenu),
        $('#mbarwrap').click(openmenu)
    
  }



    $(".refer").click(expandtarget)
  function expandtarget() {
      var targeted = $(this).attr('href');
      var $id = targeted;
      allHome();
      $($id).children('h1').trigger('click');
     
        console.log($($id).children('h1').css('line-height'));
        if ($($id).children('.mamar-content').css('display')!=='none') {
            $($id).children('h1').css('line-height', "150px")
        } else {
            $($id).children('h1').css('line-height', "1em")
        }
    }
    //   $($id).children('h1').unbind('click', collapse),
    //     $($id).children('h1').on('click', expand)
    
    var rootElement = document.documentElement;
    $('#homebtn').on("click", scrollToTop)   
    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          'top': '0',
          'behavior': "smooth"
        })
      }
});
var mq = window.matchMedia( "(min-width: 600px)" );
if (mq.matches) {
   

$(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
         navbar = $('#top-bar');
         
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();

       
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.slideUp();
          $('#homebtn').hide(100)
          $('#barback').slideUp();
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.slideDown();
          $('#barback').slideDown()
          $('#homebtn').show(100)
        }
        c = currentScrollTop;
        if (a <= 0) {
            $('#homebtn').hide(100)
        }
    });
    
  });
}
