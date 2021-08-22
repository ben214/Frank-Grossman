
var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) { 


$(document).ready(function(){
     
    $('.collapse').click(colap)
    $('.refer').click(refer)
    $('.mamarlist>h1').click(expan)
    $('.mamarlist>h1').addClass('mhead')




function scroltomamar() {
 $('html, body').animate({
  scrollTop: $("#מאמרים").offset().top
    }, 50),
    console.log('scroltomamar');
}

function scroltoId() {
 $('html, body').animate({
  scrollTop: $("#hopen").parent('.mamarlist').offset().top
    }, 50)
    console.log('scroltoId');
}
 
function expan() {
const mamarconent = $(this).parent('.mamarlist').children('.mamar-content')
$('.mamar-content').hide()
$(".mhead").removeAttr('Id', "hopen"),
$(this).attr('Id', "hopen"),
$(mamarconent).show(),
$(this).unbind('click', expan)
$(this).click(colap)
scroltoId()
$('#top-bar').hide()
$('#leftBanner').css('display', 'none')
$('#barback').hide()
console.log('expan');
}

function colap() {
$('.mamar-content').hide()
$(".mhead").removeAttr('Id', "hopen"),
$(this).unbind('click', colap)
$('.mamarlist>h1').click(expan)
scroltomamar()
$('#leftBanner').show()
$('#barback').show()
console.log('colap');
}
function refer() {
var myid = $(this).attr('target_')
$(myid).children('h1').trigger('click')
console.log('refer');
}

var c, currentScrollTop = 0,
     navbar = $('#leftBanner');
 $(window).scroll(function () {
    var a = $(window).scrollTop();   
    var b = navbar.height();
    currentScrollTop = a;  
    if (c < currentScrollTop && a > b + b) {
    //   navbar.slideUp();
      $('#top-bar').hide()
    //   $('#barback').slideUp();
      console.log('scroll close');
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.slideDown();
    //   $('#barback').show()
      $('#homebtn').show(50)
      console.log('scroll open');
    }
    c = currentScrollTop;
    if (a <= 0) {
        $('#homebtn').hide(50)
        console.log('scroll at top');
        
    }
});

var rootElement = document.documentElement;
    $('#homebtn').on("click", scrollToTop)   
     function scrollToTop() {
        colap()
        $('html, body').animate({
            scrollTop: 0
              }, 100)
              
              console.log('homwbtn');
     }
    $('.top-bar-item>a').click(allallclose)
    $('.dropping>a').click(allallclose)
    $('.arrowbox').click(dropA)


    function allallclose() {
        closealldrop()
        closemenu()
        console.log('allallclose');
    };

    function closealldrop() {
        $('.dropping').css('display', 'none'),
        $('.arrowbox').removeClass('arrowboxopen'),
        $('.arrowbox').unbind('click', closedrop),
        $('.arrowbox').click(dropA)
        console.log('closealldrop');
    };
   function dropA() {
        var dropmenu = $(this).parents('.top-bar-item').children('.dropping')
        closealldrop()
        $(this).addClass('arrowboxopen'),
        dropmenu.show(200),
        $(this).unbind('click', dropA),
        $(this).click(closedrop)
        console.log('dropA');
   }
    function closedrop() {
        $('.dropping').hide(200),
        $('.arrowbox').removeClass('arrowboxopen'),
        $(this).unbind('click',closedrop),
        $(this).click(dropA)
        console.log('closedrop');
   };

    
    $('#mbarwrap').click(openmenu)
    $('#top-bar').mouseleave(closemenu)
    function openmenu() {
        $('#top-bar').slideDown(300),
        $('#mbarwrap').unbind('click', openmenu),
        $('#mbarwrap').click(allallclose),
        $('#mmenubar1').hide(300),
        $('#mmenubar2').css({
            'transform': 'rotate(45deg) translateY(-330%)',
            'width': '150%',
            'bottom': '36%'
        }),$('#mmenubar3').css({
            'transform': 'rotate(-45deg) translateY(330%)',
            'width': '150%'
        })
        console.log('openmenu');
    }

    function closemenu() {
        $('#top-bar').slideUp(300)
        $('#mbarwrap').unbind('click', closemenu),
        $('#mbarwrap').click(openmenu),
        $('#mmenubar1').show(300),
        $('#mmenubar2').css({
            'transform': 'none',
            'width': '100%',
            'bottom': '10%'
        }),$('#mmenubar3').css({
            'transform': 'none',
            'width': '100%'
        })
        console.log('closemenu');
    }


});
}