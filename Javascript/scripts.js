
$('#main-header').hide(1000);
$('#main-header').fadeIn (1000);

$(".flex-container > div:gt(0)").hide();

setInterval(function() { 
  $('.flex-container > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.flex-container');
},  3000);

   
