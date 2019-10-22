$(document).ready(function() {
  $('span.pq').each(function() {
    var quote=$(this).clone();
    quote.removeClass('pq');
    quote.addClass('pullquote');
    $(this).before(quote);
  }); // koniec funkcji each

  $("*").dblclick(function (){
    let msg = "Kliknieto " + $(this);
    alert(msg);
  });


}); // koniec funkcji ready
