function showAllAgain() {
  // Show all when none of the bears are selected
  console.log('$(".bear-on").length', $(".bear-on").length);
  if ($(".bear-on").length === 0) {
      $(".bear-on").removeClass("bear-on");
      $(".bear-on").removeClass("bear-off");
      $(".svg-bears").removeClass("bear-off");
      $(".dropdown-item").removeClass("active");
      $(".svg-x-close").removeClass("svg-active");
      $(".btn-close-all").removeClass("btn-close-off");
      $(".btn-primary-off").hide();
  }
}
$(document).ready(function () {
  $(".btn-all").click(function () {
      $(".bear-on").removeClass("bear-on");
      $(".bear-on").removeClass("bear-off");
      $(".svg-bears").removeClass("bear-off");
      $(".dropdown-item").removeClass("active");
      $(".svg-x-close").removeClass("svg-active");
      $(".btn-close-all").removeClass("btn-close-off");
      $(".btn-primary-off").hide();
  });
  $(".btn-01").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern8_297_3249").toggleClass("bear-on");
      $("#btn-01-show").toggle();
      showAllAgain();
  });
  $(".btn-02").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern15_297_3249").toggleClass("bear-on");
      $("#btn-02-show").toggle();
      showAllAgain();
  });
  $(".btn-03").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern5_297_3249").toggleClass("bear-on");
      $("#btn-03-show").toggle();
      showAllAgain();
  });
  $(".btn-04").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern0_297_3249").toggleClass("bear-on");
      $("#btn-04-show").toggle();
      showAllAgain();
  });
  $(".btn-05").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern7_297_3249").toggleClass("bear-on");
      $("#btn-05-show").toggle();
      showAllAgain();
  });
  $(".btn-06").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern2_297_3249").toggleClass("bear-on");
      $("#btn-06-show").toggle();
      showAllAgain();
  });
  $(".btn-07").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern14_297_3249").toggleClass("bear-on");
      $("#btn-07-show").toggle();
      showAllAgain();
  });
  $(".btn-08").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern1_297_3249").toggleClass("bear-on");
      $("#btn-08-show").toggle();
      showAllAgain();
  });
  $(".btn-09").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern11_297_3249").toggleClass("bear-on");
      $("#btn-09-show").toggle();
      showAllAgain();
  });
  $(".btn-10").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern10_297_3249").toggleClass("bear-on");
      $("#btn-10-show").toggle();
      showAllAgain();
  });
  $(".btn-11").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern12_297_3249").toggleClass("bear-on");
      $("#btn-11-show").toggle();
      showAllAgain();
  });
  $(".btn-12").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern9_297_3249").toggleClass("bear-on");
      $("#btn-12-show").toggle();
      showAllAgain();
  });
  $(".btn-13").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern13_297_3249").toggleClass("bear-on");
      $("#btn-13-show").toggle();
      showAllAgain();
  });
  $(".btn-14").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern6_297_3249").toggleClass("bear-on");
      $("#btn-14-show").toggle();
      showAllAgain();
  });
  $(".btn-15").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern4_297_3249").toggleClass("bear-on");
      $("#btn-15-show").toggle();
      showAllAgain();
  });
  $(".btn-16").click(function () {
      $(".svg-bears").addClass("bear-off");
      $(".pattern3_297_3249").toggleClass("bear-on");
      $("#btn-16-show").toggle();
      showAllAgain();
  });
});
// btn svg off
$(document).ready(function () {
  $("#btn-16-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern3_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-15-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern4_297_3249").removeClass("bear-on");
      showAllAgain();
  });

  $("#btn-14-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern6_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-13-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern13_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-12-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern9_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-11-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern12_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-10-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern10_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-09-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern11_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-08-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern1_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-07-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern14_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-06-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern2_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-05-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern7_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-04-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern0_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-03-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern5_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-02-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern15_297_3249").removeClass("bear-on");
      showAllAgain();
  });
  $("#btn-01-show").click(function () {
      $(".this").toggleClass("bear-on");
      $(".pattern8_297_3249").removeClass("bear-on");
      showAllAgain();
  });
});

$("svg-bears").toggleClass("bear-off", false);
$(".dropdown-item").click(function () {
  $(this).find(".svg-x-close").toggleClass("svg-active");
});
$(".dropdown-item").click(function () {
  $(this).toggleClass("active");
  $(".btn-close-all").addClass("btn-close-off");
  showAllAgain();
});
$(".btn-primary-off").click(function () {
  $(this).css("display", "none");
});

$(".btn-primary-off").click(function () {
  $(".dropdown-item").removeClass("active");
});


