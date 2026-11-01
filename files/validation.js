const email = document.getElementById("email");
const cemail = document.getElementById("cemail");

if (email) {
  email.addEventListener("input", function () {
    const erreur = document.getElementById("emailErrorIns");

    if (email.validity.valid) {
      erreur.textContent = "";
    } else {
      erreur.textContent = "Veuillez saisir un email valide.";
    }
  });
}

if (cemail) {
  cemail.addEventListener("input", function () {
    const erreur = document.getElementById("emailErrorCon");

    if (cemail.validity.valid) {
      erreur.textContent = "";
    } else {
      erreur.textContent = "Veuillez saisir un email valide.";
    }
  });
}

const formulaire = document.querySelector("form");

if (formulaire) {
  formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulaire valide ! Démonstration : aucune donnée envoyée.");
  });
}
