$(document).ready(function() {

  $('.dlg-wrapper-edit, .dlg-wrapper').hide();
  $('.dlg-box-edit, .dlg-box').hide();


  // Check Again
  $('.item-not-delivered').click(function() {
    $('.dlg-wrapper-edit').fadeIn();
    $('.dlg-box-edit').fadeIn();
  })

  $('.item-delivered').click(function() {
    $('.dlg-wrapper').fadeIn();
    $('.dlg-box').fadeIn();
  })

  $('.dlg-box .dlg-footer .a, .dlg-box .dlg-footer button').click(function () {
    $('.dlg-wrapper').fadeOut();
    $('.dlg-box').hide();
  })

  $('.dlg-box-edit .dlg-footer .a, .dlg-box-edit .dlg-footer button').click(function () {
    $('.dlg-wrapper-edit').fadeOut();
    $('.dlg-box-edit').hide();
  })



  $('.status button').click(function(){
    $('.dropdown').toggleClass('show_dropdown')
  });

  $(this).click(function(e){
    $('.status')
      .not($('.status').has($(e.target)))
      .children('.dropdown')
      .removeClass('show_dropdown');
  })

  $('.dropdown .all').click(function() {
    $('.list-item').show();
  })
  $('.dropdown .delivered').click(function() {
    $('.item-not-delivered').hide();
    $('.item-delivered').show();
  })
  $('.dropdown .not-delivered').click(function() {
    $('.item-not-delivered').show();
    $('.item-delivered').hide();
  })
  
});
