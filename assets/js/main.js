jQuery(document).ready(function($){

  $(".btn-start").click(function (e) {
    // Remove any old one
    $(".ripple").remove();
    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();
    // Add the element
    $(this).prepend('<span class="ripple"></span>');
   // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }
    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;
    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
  });
});

// Change tab
var currentTabBtn;

$('.tab').each(function() {
   var that = $(this);
   if (that.hasClass('active')) {
       currentTabBtn = that;
	   return false;
   }
});

changeProduct(getTabFromButton(currentTabBtn));

function getTabFromButton(btn) {
    return $('#' + btn.attr('data-tabname'));
}

$('.tab').on("click", function(event) {

  getTabFromButton(currentTabBtn).attr("style", "display: none");
  getTabFromButton(currentTabBtn).removeClass("show");
  currentTabBtn.removeClass("active");

  var clickedTabBtn = $(event.target);
  clickedTabBtn.addClass("active");

  var clickedTab = getTabFromButton(clickedTabBtn);
  clickedTab.toggleClass("show");
  clickedTab.attr("style", "display: block");

  currentTabBtn = clickedTabBtn;

  changeProduct(clickedTab);

});

$('.productselect').change(function() {
    changeProduct($(this));
});

function changeProduct(that) {
    var optionSelected = that.find("option:selected");
    var valueSelected  = optionSelected.attr("data-description-name");
    var description = $('#' + valueSelected + '-description').html();
    $('#description').html(description);
}
