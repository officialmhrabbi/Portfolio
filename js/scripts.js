console.log("Hi! Welcome to my portfolio site.");

$(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        500
      );
    }
  });
});