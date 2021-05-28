$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(".navlinks").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked navbar elements");
  if ($(window).width() <= 900) {
    console.log("Clicked navbar elements");
    $(".navTrigger").click();
  }
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

var fixmeTop = $(".fixme").offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $(".fixme").css({
      position: "fixed",
      top: "0",
      left: "0",
    });
    if ($(window).width() <= 900) {
      $(".showS").css({
        display: "block",
      });
    } else {
      $(".showS").css({
        display: "none",
      });
    }
  } else {
    $(".fixme").css({
      position: "static",
    });
    $(".showS").css({
      display: "none",
    });
  }
});

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        750,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("[data-github]").each(function () {
  var _this = this;
  var repo = $(_this).data("github");

  fetch("https://api.github.com/repos/" + repo)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $(_this).find("[data-forks]").text(response.forks);
      $(_this).find("[data-stars]").text(response.stargazers_count);
    })
});
