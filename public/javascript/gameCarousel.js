// Next/previous controls
$(".next").click(function () {
  $("#popGameRow > .gameLink:last").after($("#popGameRow > .gameLink:first"));
});

$(".prev").click(function () {
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
