$(document).ready(function() {
  $("#dlg-wrapper").hide();
  $("#dlg-box").hide();

  $("#dlg-footer button").click(function() {
    $("#dlg-wrapper").fadeOut();
    $("#dlg-box").hide();
  });

  // $('#dlg-wrapper').click(function() {
  //   $(this).hide();
  //   $('#dlg-box').hide();
  // })

  $(".order-btn").click(function() {
    $("#dlg-wrapper").fadeIn();
    $("#dlg-box").fadeIn();
  });

  $('.menu').click(function() {
    // $('.adm-nav .dropdown').toggle();
  })

});
