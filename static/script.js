// responsive navigation
function openNav() {
  var x = document.getElementById("topnav-container");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

$(document).ready(function(){
  $("#dam_return a").click(function(){
      var value = $(this).html();
      var input = $('#dam');
      input.val(value);
  });
});