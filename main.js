
$(document).ready(function(){

$(".collapse").click(collapsee),
 $(".mamarlist").click(expand)

function expand() {
    var targeted = $(this).attr('id');
    var $id = '#'+targeted;
    $(".mamarlist").css({
        'height': 'auto',
        'maxHeight': '80px',
        'fontSize': '19.2px'
    })
    $(this).css({
        'height': 'auto',
        'maxHeight': '3000px',
       'fontSize': '1.5em'
      
    });
    $(this).click(collapse),
    console.log($(this).css("zIndex"));
};

function collapse() {
    $(this).css({
        'height': 'auto',
        'maxHeight': '80px',
       'fontSize': '19.2px'
    });
    $(".mamarlist").click(expand),
    $(this).click(expand),
    console.log($(this).css("fontSize"))
  };

$(".refer").click(expandtarget)
  function expandtarget() {
      var targeted = $(this).attr('href');
      var $id = targeted;
      
      $($id).trigger('click');
      console.log("refer")
    };

    function collapsee() {
        $(this).closest(".mamarlist").trigger(click),
        $(".mamarlist").click(expand)
      };

  
});

      
     