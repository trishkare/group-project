$(document).ready(function() {
$("blanks form").submit(function(event) {
  var blanks = ["name", "Address", "qualifications", "email"];

  blanks.foreach(function(blank) {
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
  });
  event.preventDefault();
});
});
