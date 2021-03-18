$(function () {
  $(document).scroll(function () {
    var $nav = $('.fixed-top')
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})

// $(document).ready(function(){
//   $(window).scrollTop(0);
// });
$(window).on('beforeunload', function () {
  $('body').hide()
  $(window).scrollTop(0)
})
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault()
  $(this).ekkoLightbox()
})
// $(window).on('load', function () {
  // $('.preloader').fadeOut()
  // $('#preloader').delay(2500).fadeOut('slow')
  // $('body').delay(2500).css({ overflow: 'visible' })
// })
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}