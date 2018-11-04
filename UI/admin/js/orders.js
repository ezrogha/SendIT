$(document).on('click', '.icon-style, .a', function (event) {
      event.preventDefault();    // Now the link doesn't do anything
      var href = this.href;      // The link's URL is in this variable
    });
    $(document).ready(function () {
      $('.dlg-wrapper').hide()
      $('.dlg-wrapper-edit').hide()
      $('.dlg-box').hide();
      $('.dlg-box-edit').hide();

      //Cancel Delete
      $('.dlg-footer button').click(function () {
        $('.dlg-wrapper').fadeOut();
        $('.dlg-box').hide();
      })

      //Delete Order
      $('.dlg-footer .a').click(function () {
        $('.dlg-wrapper').fadeOut();
        $('.dlg-box').hide();
      })

      //Open Delete Modal
      $('.trash').click(function () {
        $('.dlg-wrapper').fadeIn();
        $('.dlg-box').fadeIn();
      })

      // Discard Changes on Edit
      $('.dlg-box-edit .dlg-footer button').click(function () {
        $('.dlg-wrapper-edit').fadeOut();
        $('.dlg-box-edit').hide();
      })

      // Save Changes on Edit
      $('.dlg-box-edit .dlg-footer .a').click(function () {
        $('.dlg-wrapper-edit').fadeOut();
        $('.dlg-box-edit').hide();
      })

      // Open Edit Modal
      $('.edit').click(function () {
        $('.dlg-wrapper-edit').fadeIn();
        $('.dlg-box-edit').fadeIn();
      })

      // Implement Dropdown
      $('.status button').click(function () {
        $('.dropdown').toggleClass('show_dropdown')
      });

      //Click anywhere in the document except class status and dropdown
      $(this).click(function (e) {
        $('.status')
          .not($('.status').has($(e.target)))
          .children('.dropdown')
          .removeClass('show_dropdown');
      })

      // Display all Orders made
      $('.dropdown .all').click(function () {
        $('.list-item').show();
      })

      // Display Delivered Orders
      $('.dropdown .delivered').click(function () {
        $('.item-not-delivered').hide();
        $('.item-delivered').show();
      })

      // Display Non delivered Orders
      $('.dropdown .not-delivered').click(function () {
        $('.item-not-delivered').show();
        $('.item-delivered').hide();
      })

      //Nav Menu dropdown
      $('.menu').click(function() {
        // $('nav .dropdown').toggle();
      })
    });