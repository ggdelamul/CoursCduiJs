console.log("coucou ✌️");
//////////////////NOTION DE VARIABLE///////////////////////////////
///récupérer le titre 
const titre = document.querySelector('h1');
console.log(titre);
//modifier la couleur du titre 
titre.style.color = 'red';
let nom = "Jhon";
let prenom = "Doe";
let nomComplet = nom + " " + prenom;
titre.textContent = nomComplet;
let nombre = 42;
let monBooleen = true;
//pratique 
//créer un paragraphe dans le doc html 
//créer 2 variable a et b  nombre les multiplier entre eux 
//Composer une chaine de caractère et et l'inclure dans la balise paragraphe sous cette forme "le resultat de a et de = resultat"; 

//////////////////projet bannière ///////////////
// pseudo -code 
/* Au clic sur le bouton accepter la div cookies devient invisible 
*/
//////////les 3S
//je Selectionne et je Stocke les elements dont j'ai besoin 
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

const divCookie = document.querySelector('.cookies');
// je Soumet
btnSuccess.addEventListener("click", () => {
    console.log('bouton cliqué');
    divCookie.style.opacity = 0;
})

//pratique 
/*ajouter l'évènement au bouton parametres pour que au clic l'utlisateur soit rediriger vers une page html parametres.html sans utiliser de balsies a 
indice window.location.href
//parler de l'obejt window 
*/
const btnParam = document.querySelector('.btn-param');
btnParam.addEventListener("click", () => {
    console.log('bouton cliqué');
    divCookie.style.opacity = 0;
    window.location.href = "parametres.html";
})

//////////////////projet youtube ///////////////
////pseudo code au clic sur le bouton le bouton change de couleur et le texte change 

///notion de condition
const btnAbonnezVous = document.querySelector('.abo');
btnAbonnezVous.addEventListener('click', () => {
    btnAbonnezVous.classList.toggle('colorAbo');
    if (btnAbonnezVous.innerText === "Abonnez vous") {
        btnAbonnezVous.innerText = "Abonné!";
    } else {
        btnAbonnezVous.innerText = "Abonnez vous";
    }
});

//////projet social ///////////
const icones = document.querySelectorAll('.social>a');
const modal = document.querySelector('.modal');
const titreSocial = document.querySelector('span');
const btnAnnuler = document.querySelector('.btn-cancel');
const btnSocial = document.querySelector('.btn-social');
icones.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
        let titre = link.dataset.titre;
        titreSocial.innerText = titre;
        switch (titre) {
            case "Page Facebook":
                btnSocial.href = "fb.com"
                break;
            case "Page Instagram":
                btnSocial.href = "insta.com"
                break;
            case "Page Linkedin":
                btnSocial.href = "lk.com"
                break;
        }
    })
});
btnAnnuler.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.opacity = 0;
})


////projet menu burger 
const bars = document.querySelector('.fa-bars');
console.log(bars);
const menu = document.querySelector('.navbar-mobile .modalMenu');
console.log(menu);
bars.addEventListener("click", () => {
    console.log("click");
    menu.classList.toggle('displayMenuMobile');
    bars.classList.toggle('fa-close');
    bars.classList.toggle('fa-bars');
});

//projet fiche produit 
const vignettes = document.querySelectorAll('.small');
const fullImg = document.getElementById('full');
console.log(fullImg);
console.log(vignettes);
const pCpt = document.querySelector('.cpt');
const btnAdd = document.querySelector('.btn-add');
let cpt = 0;
vignettes.forEach((vignette) => {
    vignette.addEventListener("click", () => {
        let imgSource = vignette.getAttribute('src');
        fullImg.setAttribute('src', imgSource);
    })
})

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    cpt++;
    if (cpt > 1) {
        pCpt.textContent = `Votre panier contient ${cpt} articles`;
    } else {
        pCpt.textContent = "Votre panier contient 1 article";
    }
})





//projet popup
const modalCode = document.querySelector('.modal-container');
const btnCode = document.querySelector('.btn-code');
console.log(btnCode);
const code = document.querySelector('.code');
const iconeCode = document.querySelector('.fa-close');
let isReading = false;
window.addEventListener('scroll', () => {
    let hauteur = document.documentElement.scrollTop;
    if (!isReading) {
        if (hauteur > 320) {
            console.log('appartition div ');
            modalCode.style.display = "flex";
            isReading = true;
        }
    }
})

btnCode.addEventListener("click", () => {
    code.style.display = "block";
})
iconeCode.addEventListener('click', () => {
    modalCode.style.display = "none";
})