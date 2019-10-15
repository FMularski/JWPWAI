var score = 0;
var q = 0;

var questions = [
  ['44 * 39 = ?', 1716],
  ['3 ^ 8 = ?', 6561],
  ['187257 / 241 = ?', 777],
  ['sqrt(224676) = ?', 474],
  ['1 + 1 = ?', 2]
]

document.getElementById("nr_pytania").textContent = "Pytanie numer " + (q + 1) + ":";
document.getElementById("tresc_pyt").textContent = questions[0][0];
document.getElementById("odp").textContent = '';
document.getElementById("btn_text").textContent = "Nastepne pytanie...";

function nastepne()
{
  let udzielona_odp = document.getElementById("odp").value;

  if ( udzielona_odp == questions[q][1])
    score++;

  q++;

  if ( q == questions.length)
  {
    let message = 'Liczba punktów: ' + score;
    message += ' z ' + questions.length;
    message += '.';
    alert("Koniec quizu! " + message);
  }
  else
  {
    document.getElementById("nr_pytania").textContent = "Pytanie numer " + (q + 1) + ":";
    document.getElementById("tresc_pyt").textContent = questions[q][0];
    document.getElementById("odp").value = '';

    if ( q == questions.length - 1)
      document.getElementById("btn_text").textContent = "Zakoncz quiz";
  }
}

function restart()
{
  score = 0;
  q = 0;

  document.getElementById("nr_pytania").textContent = "Pytanie numer " + (q + 1) + ":";
  document.getElementById("tresc_pyt").textContent = questions[0][0];
  document.getElementById("odp").value = '';
  document.getElementById("btn_text").textContent = "Nastepne pytanie...";
}
