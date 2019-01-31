// Repsonsible for polyglot greeting on home page
$(document).ready(() => ()
  rotation = [
    "Hola.",
    "Bonjour.",
    "你 好",
    "Hallo.",
    "مرحبا",
    "Hello."
  ]

  var i = 0;

  setInterval(function(){
    $('#options').fadeOut(1000, function(){
      $(this).text(rotation[i++ % rotation.length]).fadeIn(1000);
    });
  }, 6000);
});