
  var mq = window.matchMedia( "(min-width: 600px)" );
  if (mq.matches) { 

   
    $(document).ready(function(){

        $('.collapse').click(colap)
        $('.refer').click(refer)
        $('.mamarlist>h1').click(expan)
        $('.mamarlist>h1').addClass('mhead')




function scroltomamar() {
     $('html, body').animate({
      scrollTop: $("#מאמרים").offset().top
        }, 50)
    }

function scroltoId() {
     $('html, body').animate({
      scrollTop: $("#hopen").parent('.mamarlist').offset().top
        }, 50)
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
    $('#barback').hide()
}

function colap() {
    $('.mamar-content').hide()
    $(".mhead").removeAttr('Id', "hopen"),
    $(this).unbind('click', colap)
    $('.mamarlist>h1').click(expan)
    scroltomamar()
    $('#top-bar').show()
    $('#barback').show()
}
function refer() {
    var myid = $(this).attr('target_')
    $(myid).children('h1').trigger('click')
}

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
          $('#homebtn').show(50)
        }
        c = currentScrollTop;
        if (a <= 0) {
            $('#homebtn').hide(50)
        }
    });

    var rootElement = document.documentElement;
        $('#homebtn').on("click", scrollToTop)   
         function scrollToTop() {
            rootElement.scrollTo({
              'top': '',
              'behavior': "smooth"
            })
         }




























// $(document).ready(function () {
   
//    var realID = "',$id,'";
//   $('.collapse').click(collapsee);
//  $('.mamarlist').on('click').toggle(expand)
//  var targeted = $(this).attr('href');
//  var $id = targeted;
// var IAD = $(this).parent('.mamarlist').attr('id')

// // $('.mamarlist').attr('href', $id)
// // console.log();


//  var rootElement = document.documentElement;
//     $('#homebtn').on("click", scrollToTop)   
//      function scrollToTop() {
//         rootElement.scrollTo({
//           'top': '',
//           'behavior': "smooth"
//         })
//      }

//     function scroltomamar() {
//         $('html, body').animate({
//             scrollTop: $("#מאמרים").offset().top
//         }, 0),
//         console.log('scroltoamamar')
//      }
//      function scroltoId() {
//         $('html, body').animate({
//             scrollTop: realID.offset().top
//         }, 100),
//         // document.querySelector($id).scrollIntoView({ 
//         //     behavior: 'smooth' 
//         //   });
//         scroltomamar()
     
//      }
//      function allHome(){
//          $('.mamar-content').css('display', 'none'),
//          $(this).children('h1').removeClass('.h1open')
//          scroltomamar()
         
//      };
      
//     function expand() {
//         var dropping = $(this).children('.mamar-content'); 
//         allHome();
//         $($id).addClass('hopen')
//         dropping.slideDown(),
//         console.log('expand!!!')
//         // $(this).unbind('click', expand)
//         //     $(this).on('click', collapse)
//             // scroltomamar()
//             // scroltoId()
//         };

//     $(".refer").click(expandtarget)
//     function expandtarget() {
//         var $id = $(this).attr('target_')
//         $($id).trigger('click');
         
//         allHome();
//         // scroltoId()
        
//         $(this).children('h1').addClass('hopen')
             
        
          
//       };


//       function collapse(){
//         scroltomamar
//         allHome();
//         // $(this).unbind('click', collapse),
//         // $('.mamarlist').on('click', expand)
//         console.log('collapse');
//     };


//       function collapsee(){
//         allHome();
//         console.log('collllaaaapseee');
//         // $('.mamarlist').on('click', expand)
//     };
   


//     // 'use strict';
//      var c, currentScrollTop = 0,
//          navbar = $('#top-bar');
//      $(window).scroll(function () {
//         var a = $(window).scrollTop();   
//         var b = navbar.height();
//         currentScrollTop = a;  
//         if (c < currentScrollTop && a > b + b) {
//           navbar.slideUp();
//           $('#homebtn').hide(100)
//           $('#barback').slideUp();
//         } else if (c > currentScrollTop && !(a <= b)) {
//           navbar.slideDown();
//           $('#barback').slideDown()
//           $('#homebtn').show(50)
//         }
//         c = currentScrollTop;
//         if (a <= 0) {
//             $('#homebtn').hide(50)
//         }
//     });
    
  

});
}

