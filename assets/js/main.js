/** 
*
*Fonction toggle pour activer ou désactiver la fenêtre modale de la newsletter

*Ce code ajoute un gestionnaire  de de clic à tous les éléments ayant la classe "show__newsletter".
*Lorsque l'un de ces éléments est cliqué, il bascule l'état de visibilité de l'élément ayant
*la classe "newsletter" en ajoutant ou en supprimant la classe "active".
*Cela permet de montrer ou de cacher la newsletter, selon son état actuel.
*
*/
/**
* 
* const SHOW_NEWSLETTER = document.getElementsByClassName("show__newsletter");
* 
*Cette ligne sélectionne tous les éléments de la page HTML qui ont la classe "show__newsletter"
et les stocke dans une variable appelée SHOW_NEWSLETTER.
Cela retourne un objet semblable à un tableau, appelé une collection HTML.
*
*/
const SHOW_NEWSLETTER = document.getElementsByClassName("show__newsletter");
/*  console.log(SHOW_NEWSLETTER);
/**
*
* for (const show of SHOW_NEWSLETTER)
Cette ligne initialise une boucle for...of qui parcourt chaque élément de la collection SHOW_NEWSLETTER. 
*
*/
function toggleNewsletter() {
  const newsletter = document.querySelector(".newsletter");
  newsletter.classList.toggle("active");
  document.body.classList.toggle("newsletter-open", newsletter.classList.contains("active"));
}

for (const show of SHOW_NEWSLETTER) {   
/**
*
*show.addEventListener("click", () => {}
*Cette ligne ajoute un écouteur d'événement de clic à chaque élément show de la collection.
*Lorsqu'un élément est cliqué, la fonction fléchée (() => { ... }) est exécutée.
*
*/
  show.addEventListener("click", (event) => { 
    event.preventDefault();
    toggleNewsletter();    
  });

  show.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleNewsletter();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const newsletter = document.querySelector(".newsletter");

    if (newsletter.classList.contains("active")) {
      newsletter.classList.remove("active");
      document.body.classList.remove("newsletter-open");
    }
  }
});

  // COMPTE à REBOURS

  // console.log("le fichier est bien chargé");

// Ingrédient 1 : Définir la date de fin en millisecondes 

const decompteDateFinale = new Date("May 12,2026 15:00:01").getTime();

// console.log(decompteDateFinale)

// Ingrédient 2 : Créer la fonction qui calcule le temps restant


function decompte()  {

  const maintenant = Date.now();
    
  const tempsRestant =decompteDateFinale - maintenant;

  const seconde = 1000;
  const minute = seconde * 60;
  const heure = minute * 60 ;
  const jour = heure * 24;

  const j = Math.floor(tempsRestant / jour)
  const h = Math.floor((tempsRestant % jour) / heure)
  const m = Math.floor((tempsRestant % heure) / minute)
  const s = Math.floor((tempsRestant % minute) / seconde)

    document.getElementById("jour").textContent =j;
    document.getElementById("heure").textContent =h;
    document.getElementById("minute").textContent =m;
    document.getElementById("seconde").textContent =s;
}
decompte();

let time =setInterval(decompte, 1000)


