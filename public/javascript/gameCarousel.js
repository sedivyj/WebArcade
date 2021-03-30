<<<<<<< Updated upstream
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesG");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
=======
// Next/previous controls
$(".prev").click(function () {
  $("#popGameRow > .gameLink:last").after($("#popGameRow > .gameLink:first"));
});

$(".next").click(function () {
  $("#popGameRow > .gameLink:first").before($("#popGameRow > .gameLink:last"));
});

// // Thumbnail image controls
// function currentSlide(n) {
//   var index = $("td#" + n + ".gameLink").index();
//   console.log(index);
// }

// $(".dot").click(function () {
//   var index = $(this).index();

// });

// function showSlides(n) {
//   var prev = $("td.gameLink:lt(" + n + ")");
//   $("td.gameLink:last").after(prev);

// }
>>>>>>> Stashed changes
