var total=1;
$(document).ready(function()
{
  $("form#formInput").submit(function(event)
  {
    event.preventDefault();
    var userInput = parseInt($(".number").val());
    for (var i=userInput;i>=1;i--)
    {
      total=total*i;
    }
    $("#answer").text("The factorial of "+ userInput + " is: " + total);
  })
})
