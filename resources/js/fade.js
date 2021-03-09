$(function () {
    $(".vision").focusin($("div#salutation").fadeIn(5000));
    $(".vision").focusout($("div#salutation").fadeOut(5000));
  });

  $(function () {
    height = $("#vision").css("height");
    width = $("#vision").css("width");
    marginTop = $("#vision").css("margin-top");
    marginLeft = $("#vision").css("margin-left");

    /*
        console.log("height: " + height + ", width: " + width + ", margin-top: " + marginTop + ", margin-left: " + marginLeft);
        */
  });