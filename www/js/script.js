console.log('right')

    $('#mainSlider').carousel({
    pause: false
  })
  $('body').scrollspy({ target: '#list-example' })
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
  $(window).on('activate.bs.scrollspy', function (e,obj) {
    console.log(obj.relatedTarget);
});

$(document).ready(function(){
  $("text").mouseover(function(){
    $("text").css("opacity", "1");
  });
  $("text").mouseout(function(){
    $("text").css("opacity", "0");
  });; /*in regards to the mouse over the pics, opacity changes  applying the text above*/
});



window.onscroll = function() {scrollFunction()}; /*my new scroll function init */

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("about1").style.fontSize = "30px";
    document.getElementById("basket1").style.fontSize = "30px";
   document.getElementById("products1").style.fontSize = "30px";
    document.getElementById("contact1").style.fontSize = "30px";
    document.getElementById("services1").style.fontSize = "30px";/*font size is this size when we scroll down */
    
  
  } else {
    document.getElementById("about1").style.fontSize = "50px";
    document.getElementById("basket1").style.fontSize = "50px";
    document.getElementById("products1").style.fontSize = "50px";
    document.getElementById("services1").style.fontSize = "50px";
    document.getElementById("contact1").style.fontSize = "50px";
    document.getElementById("toplogo").height = "300";
  }/*font size is this size when we scroll up to these points */
  
}