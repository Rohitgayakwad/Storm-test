// Accordian-JavaScript--

$(document).ready(function () {
    // For the click-based accordions, the first one stays open
    $(".accordian_group:not(.on-hover)").each(function () {
      $(this).find(".accordian_header:first").addClass("is-open");
      $(this).find(".header_content:first").show();
    });
  
    // Click event for accordions without "on-hover" class
    $(".accordian_group:not(.on-hover) .accordian_text").click(function () {
      var $accordionContent = $(this).next(".header_content");
      var $accordionOuter = $(this).closest(".accordian_header");
      var $parentWrapper = $(this).closest(".accordian_group");
  
      // Slide up all other accordions IN THIS WRAPPER and remove the 'is-open' class
      $parentWrapper.find(".header_content").not($accordionContent).slideUp();
      $parentWrapper
        .find(".accordian_header")
        .not($accordionOuter)
        .removeClass("is-open");
  
      // Toggle the clicked accordion
      if ($accordionContent.is(":visible")) {
        $accordionContent.slideUp();
        $accordionOuter.removeClass("is-open");
      } else {
        $accordionContent.slideDown();
        $accordionOuter.addClass("is-open");
      }
    });
  });