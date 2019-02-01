// Repsonsible for polyglot greeting on home page
$(document).ready(function(){
  rotation = [
    "hola.",
    "bonjour.",
    "你 好",
    "hallo.",
    "مرحبا",
    "hello."
  ]

  var i = 0;

  setInterval(function(){
    $('#options').fadeOut(1000, function(){
      $(this).text(rotation[i++ % rotation.length]).fadeIn(1000);
    });
  }, 6000);
});