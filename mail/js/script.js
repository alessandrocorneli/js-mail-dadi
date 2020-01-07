var mail = prompt("Inserisci la tua mail:");
console.log(mail);
var archivioMail = ["1@example.com","2@example.com","3@example.com"];
for (var i = 0; i < archivioMail.length; i++) {
    if (archivioMail.includes(mail)) {
      document.writeln("corretto");
    }
    else {
      documenteriteln("errore");
    }
}
