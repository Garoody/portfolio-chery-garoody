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
for (const show of SHOW_NEWSLETTER) {   
/**
*
*show.addEventListener("click", () => {}
*Cette ligne ajoute un écouteur d'événement de clic à chaque élément show de la collection.
*Lorsqu'un élément est cliqué, la fonction fléchée (() => { ... }) est exécutée.
*
*/
show.addEventListener("click", () => { 
/** 
*
*const newsletter = document.querySelector(".newsletter");
*
*Cette ligne sélectionne le premier élément de la page HTML ayant la classe
*"newsletter" et le stoke dans la variable appelée newsletter.
*La méthode querySelector retourne uniquement le premier élément correspond
*à la requête spécifiée.
*
*/
const newsletter = document.querySelector(".newsletter");
/**
*
*newsletter.classlist.toggle("active"); -
*Cette ligne utilise la méthode classlist.toggle pour ajouter ou supprimer la classe 
*"active" de l'élément newsletter. Si l'élément a déjà la classe "active", elle est supprimée;
*sinon, elle est ajoutée. Cela permet de basculer l'état de visibilité de l'élément.
*/
newsletter.classList.toggle("active");    
});
  }

  // COMPTE à REBOURS

  // console.log("le fichier est bien chargé");

// Ingrédient 1 : Définir la date de fin en millisecondes 

const decompteDateFinale = new Date("May 7,2026 15:00:01").getTime();

// console.log(decompteDateFinale)

// Ingrédient 2 : Créer la fonction qui calcule le temps restant


function decompte()  {

    
    // TODO_01: Récupérer l'heure actuelle
    const maintenant = Date.now();
    
// console.log("maintenant : " + maintenant);

        // TODO_02: Calculer le temps restant
        const tempsRestant =decompteDateFinale - maintenant;

        // console.log(`temps restant : ${tempsRestant}`);

        // TODO_03: Convertire en jours, heures, minutes, secondes
        const seconde = 1000;
        const minute = seconde * 60;
        const heure = minute * 60 ;
        const jour = heure * 24;

        const j = Math.floor(tempsRestant / jour)
        // console.log("j : " + j);
         const h = Math.floor((tempsRestant % jour) / heure)
        // console.log("h : " + h);

               const m = Math.floor((tempsRestant % heure) / minute)
        // console.log("m : " + m);

             const s = Math.floor((tempsRestant % minute) / seconde)
        // console.log("s : " + s);

        // TODO_04: Afficher le resultats dans le html
        document.getElementById("jour").textContent =j;
        document.getElementById("heure").textContent =h;
        document.getElementById("minute").textContent =m;
        document.getElementById("seconde").textContent =s;
}


decompte();

let time =setInterval(decompte, 1000)


