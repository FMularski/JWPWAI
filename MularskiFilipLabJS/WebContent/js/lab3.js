$(document).ready(function() {
  // zad 1
  $('span.pq').each(function() {
    var quote=$(this).clone();
    quote.removeClass('pq');
    quote.addClass('pullquote');
    $(this).before(quote);
  }); // koniec funkcji each

  // zad 2.1
  $("*").dblclick(function (){
    let msg = "Kliknieto " + $(this);
    alert(msg);
  });

  // zad 2.2

  $("a").hover(function(){
    let message = "<p>Wskazałeś odnośnik myszą!</p>";
    $('.main').append(message);
  });


}); // koniec funkcji ready
