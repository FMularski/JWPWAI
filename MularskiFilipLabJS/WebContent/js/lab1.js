var name = 'Filip';
var seasons = ['spring', 'summer', 'fall', 'winter'];

var prime_numbers = [2, 3, 5, 7, 11, 13];

var letters = ['a', 'b', 'c', 'd', 'e', 'f'];

function myData()
{
  var imie = document.getElementById("imie").textContent;
  var nazwisko = document.getElementById("nazwisko").textContent;
  var grupa = document.getElementById("grupa").textContent;
  var indeks = document.getElementById("indeks").textContent;
  var email = document.getElementById("email").textContent;

  alert(imie + ' ' + nazwisko + ' grupa: ' + grupa + ' ' + indeks + ' ' + email);
}
