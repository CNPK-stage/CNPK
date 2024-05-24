function loadPage(page) {
  const content = document.getElementById("content");
  switch (page) {
    case "home":
      content.innerHTML =
        "<h1>Welcome to CNPK</h1><p>Welcome to the CNPK homepage.</p>";
      break;
    case "association":
      content.innerHTML =
        "<h1>L’association</h1><p>Details about the association.</p>";
      break;
    case "contact":
      content.innerHTML = "<h1>Contact</h1><p>Contact details and form.</p>";
      break;
    case "localisation":
      content.innerHTML = "<h1>Localisation</h1><p>Location information.</p>";
      break;
    case "reglements":
      content.innerHTML =
        "<h1>Règlements intérieurs</h1><p>Rules and regulations.</p>";
      break;
    case "newsletter":
      content.innerHTML =
        "<h1>S’inscrire à la Newletter</h1><p>Newsletter sign-up form.</p>";
      break;
    case "activites":
      content.innerHTML = "<h1>Activités</h1><p>Details about activities.</p>";
      break;
    case "catalogue":
      content.innerHTML = "<h1>Catalogue</h1><p>Catalogue of activities.</p>";
      break;
    case "equipe":
      content.innerHTML =
        "<h1>L’équipe encadrante</h1><p>Details about the team.</p>";
      break;
    case "inscriptions":
      content.innerHTML =
        "<h1>Inscriptions 2023-2024</h1><p>Enrollment information.</p>";
      break;
    case "voile":
      content.innerHTML =
        "<h1>Voile</h1><p>Details about sailing activities.</p>";
      break;
    case "longeCote":
      content.innerHTML =
        "<h1>Longe côte</h1><p>Details about longe côte activities.</p>";
      break;
    case "horaires":
      content.innerHTML =
        "<h1>Horaires de pratique</h1><p>Schedule of practice sessions.</p>";
      break;
    case "evenements":
      content.innerHTML =
        "<h1>Evènements / Manifestations</h1><p>Details about events.</p>";
      break;
    case "stagesPrintemps":
      content.innerHTML =
        "<h1>STAGES Voile en Pays de Brest Printemps 2023</h1><p>Spring 2023 sailing stages.</p>";
      break;
    case "regate":
      content.innerHTML =
        "<h1>Régate printemps 2023</h1><p>Spring 2023 regatta.</p>";
      break;
    case "championnat":
      content.innerHTML =
        "<h1>Championnat Régional de Bretagne de Longe Côte</h1><p>Regional championship details.</p>";
      break;
    case "baleata":
      content.innerHTML =
        "<h1>Baléata an Dour Breizh</h1><p>Event details.</p>";
      break;
    case "partenaires":
      content.innerHTML = "<h1>Partenaires</h1><p>Details about partners.</p>";
      break;
    case "webcam":
      content.innerHTML = "<h1>Webcam</h1><p>Live webcam feed.</p>";
      break;
    case "meteo":
      content.innerHTML = "<h1>Météo</h1><p>Weather information.</p>";
      break;
    case "annuaire":
      content.innerHTML =
        "<h1>Annuaire des marées</h1><p>Tide directory information.</p>";
      break;
    case "windguru":
      content.innerHTML =
        "<h1>Windguru Finistère nord</h1><p>Wind forecast details.</p>";
      break;
    case "surf":
      content.innerHTML = "<h1>Allo, surf !</h1><p>Surfing information.</p>";
      break;
    case "stagesEte":
      content.innerHTML = "<h1>Stages d’été</h1><p>Summer stage details.</p>";
      break;
    default:
      content.innerHTML =
        "<h1>Welcome to CNPK</h1><p>Welcome to the CNPK homepage.</p>";
  }
}

// Load default page
window.onload = function () {
  loadPage("home");
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function loadPage(page) {
  // Cette fonction chargera le contenu de la page demandée
  fetch(page + ".html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("content").innerHTML = data));
}
