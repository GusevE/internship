$(document).ready(function () {
  $(".slider").slick({ dots: true, stagePadding: true });
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#scroll_top").show();
    } else {
      $("#scroll_top").hide();
    }
  });

  $("#scroll_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
$(function () {
  var tab = $("#tabs .tabs-items > div");
  tab.hide().filter(":first").show();

  // Клики по вкладкам.
  $("#tabs .tabs-nav a")
    .click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $("#tabs .tabs-nav a").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":first")
    .click();

  // Клики по якорным ссылкам.
  $(".tabs-target").click(function () {
    $("#tabs .tabs-nav a[href=" + $(this).data("id") + "]").click();
  });
});
