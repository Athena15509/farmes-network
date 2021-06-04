document.body.onload = function() {
  jQuery(document).ready(function($){

    setTimeout(function() {
      if(!$('.preloader').hasClass('done')) {
        $('.preloader').addClass('done');
      };
    }, 1000);

    if(!$('.preloader').hasClass('done')) {
      setTimeout(function() {
        $('div.preloader').detach();
      }, 2000);
    };

  });
};
