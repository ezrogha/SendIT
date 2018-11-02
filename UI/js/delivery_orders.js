$(document).ready(function() {
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
