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

var points = 0;
var questionsLeft = 4;

function btnAnswer(point, qn)
{
  points += point;
  questionsLeft--;

  let btnClassName = 'pyt' + qn + 'btn';
  let btns = document.getElementsByClassName(btnClassName);
  for ( i = 0; i < btns.length; i++)
    btns[i].style.visibility = 'hidden';

  if (questionsLeft == 0)
    alert('Zdobyte punkty: ' + points);
}

function restartQuiz()
{
  points = 0;
  questionsLeft = 4;
  for ( i = 0; i < 4; i++)
  {
    let btnClassName = 'pyt' + (i + 1) + 'btn';
    let btns = document.getElementsByClassName(btnClassName);
    for ( j = 0; j < btns.length; j++)
      btns[j].style.visibility = 'visible';
  }
}
