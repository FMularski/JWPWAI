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

  // zad 2.3

  $("#btn").click(function(){
    $(this).val("zostałem kliknięty!");
  });

  // zad 2.4

  $(".changebtn").click(function(){

    let nr = $(this).attr('value');
    btnChange(nr);

    $(this).val( nr + " kliknięty!");
  });


  function btnChange(nr)
  {
    switch (nr)
    {
      case "1":
        $("#testowy").addClass("btn1changed");
        $('.main').append("+ zmieniono kolor czcionki na czerwony<br/>");
      break;
      case "2":
        $("#testowy").addClass("btn2changed");
        $('.main').append("+ ustawiono wielkosc czcionki na 24px<br/>");
      break;
      case "3":
        $("#testowy").addClass("btn3changed");
        $('.main').append("+ dodano podkreslenie tekstu<br/>");
      break;
      case "4":
        $("#testowy").addClass("btn4changed");
        $('.main').append("+ wysrodkowano tekst<br/>");
      break;
      case "5":
        $("#testowy").addClass("btn5changed");
        $('.main').append("+ kazdy wyraz rozpoczyna sie wielka litera<br/>");
      break;
      case "6":
        $("#testowy").addClass("btn6changed");
        $('.main').append("+ pogrubiono tekst<br/>");
      break;
      case "7":
        $("#testowy").addClass("btn7changed");
        $('.main').append("+ dodano obramowanie tekstu<br/>");
      break;
      case "8":
        $("#testowy").addClass("btn8changed");
        $('.main').append("+ dodano kursywe<br/>");
      break;
      case "9":
        $("#testowy").addClass("btn9changed");
        $('.main').append("+ zmieniono czcionke<br/>");
      break;
      case "10":
        $("#testowy").addClass("btn10changed");
        $('.main').append("+ dodano cien tekstu<br/>");
      break;
      default:
        break;

    }
  }









}); // koniec funkcji ready
