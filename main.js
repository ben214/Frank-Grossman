
// function Mopen(event) {
    
//     $(".mamar-content").toggleClass("blockk")
//     // mcontent.style.opacity = 1;
    
//     console.log($(".mamar-content"));
// }

$(document).ready(function(){
    $(".collapse").click(collapse)
  
 $(".mamarlist>h1").click(expand);
function expand() {
   $(this).parent(".mamarlist").css({
       "height": "auto",
       "max-height": "3000px",
       "font-size" :"1.5em"
   }),
   $(this).on("click", collapse),
   $(".collapse").click(collapse)
 };
     
function collapse() {
    $(this).closest(".mamarlist").css({
        "max-height": "80px",
        "font-size" :"1em"});
    $(".mamarlist>h1").on("click", expand)
  };


//   var terget = 
  $(".refer").click(expandtarget)
  function expandtarget() {
      var targeted = $(this).attr('href');
      var $id = targeted;
      var $parent = $($id).parent;
      $($id).trigger('click')

  };
});

      
     