var mail = prompt("Inserisci la tua mail:");
console.log(mail);
var archivioMail = ["1@example.com","2@example.com","3@example.com"];
console.log(archivioMail[3]);
var trovato = false;
for (var i = 0; i < archivioMail.length; i++) {
  var mailConsiderata = archivioMail[i]
  if (mail==mailConsiderata) {
    trovato = true;
  }
}
console.log(trovato);
if (trovato==false) {
  document.writeln("errore");
}
else {
  document.writeln("corretto");
}
