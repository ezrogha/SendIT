$(document).on("click", ".icon-style, .a", function(event) {
  event.preventDefault();
  var href = this.href; 
});
$(document).ready(function() {
  $(".dlg-wrapper").hide();
  $(".dlg-wrapper-edit").hide();
  $(".dlg-box").hide();
  $(".dlg-box-edit").hide();

  //Cancel Delete
  $(".dlg-footer button").click(function() {
    $(".dlg-wrapper").fadeOut();
    $(".dlg-box").hide();
  });

  //Delete Order
  $(".dlg-footer .a").click(function() {
    $(".dlg-wrapper").fadeOut();
    $(".dlg-box").hide();
  });

  //Open Delete Modal
  $(".trash").click(function() {
    $(".dlg-wrapper").fadeIn();
    $(".dlg-box").fadeIn();
  });

  // Discard Changes on Edit
  $(".dlg-box-edit .dlg-footer button").click(function() {
    $(".dlg-wrapper-edit").fadeOut();
    $(".dlg-box-edit").hide();
  });

  // Save Changes on Edit
  $(".dlg-box-edit .dlg-footer .a").click(function() {
    $(".dlg-wrapper-edit").fadeOut();
    $(".dlg-box-edit").hide();
  });

  // Open Edit Modal
  $(".edit").click(function() {
    $(".dlg-wrapper-edit").fadeIn();
    $(".dlg-box-edit").fadeIn();
  });

  $(".status button").click(function() {
    $(".dropdown").toggleClass("show_dropdown");
  });

  $(this).click(function(e) {
    $(".status")
      .not($(".status").has($(e.target)))
      .children(".dropdown")
      .removeClass("show_dropdown");
  });

  $(".dropdown .all").click(function() {
    $(".list-item").show();
  });
  $(".dropdown .active").click(function() {
    $(".item-not-active").hide();
    $(".item-active").show();
  });
  $(".dropdown .not-active").click(function() {
    $(".item-not-active").show();
    $(".item-active").hide();
  });
});
