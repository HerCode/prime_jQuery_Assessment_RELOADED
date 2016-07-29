$(function(){
  var generateClicked = 0;
  // append container to the DOM "onClick"
  $("#generate").on('click',function(){
    // Incement Clicks to track count
    generateClicked++;
    // CREATE div/two buttons, and span with text
    var buttonContainer = '<div class=\"container\"><button class=\"change\">CHANGE COLOR</button><button class=\"remove\">REMOVE</button><br /><span id=\"generateClicked' +  generateClicked  + '\">Here are the number of clicks: <span></div>';
    // Append 'div' "container" to the DOM
    $("body").append(buttonContainer);
    // Target '<span></span>'
    var spanName = "#generateClicked" + generateClicked;
    // Append text to '<span></span>'
    $(spanName).append(generateClicked);
  });

  $(document).on('click', ".remove", function(){
    // remove '<div></div>' 'onClick'
    $(this).parent().remove();
  });

  $(document).on('click', ".change", function(){
    // Toggle 'background-color' from green to red
    $(this).parent().toggleClass("red");
  });
});
