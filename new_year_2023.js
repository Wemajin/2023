window.addEventListener('load',function(){
    let fenetreG = document.querySelector('.fenetres');
    let divPoints = document.querySelector('#divPoints');
    let lampe = fenetreG.querySelectorAll('rect');
    let lampeOn = fenetreG.querySelectorAll('rect.On');
    let lampeOff = fenetreG.querySelectorAll('rect.off');
    let test = lampeOn.length / lampe.length * 100;
    let gameWindow = document.querySelector('.game');
    console.log(lampeOn.length);
    console.log(lampe.length);
    let percentBar = document.querySelector('.lampLenght');

    function PercentBar(){
        test = lampeOn.length / lampe.length * 100;
        percentBar.style.height = test +'%';
    }


    const endGame = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(200%)' }
    ]
    const endGameTime = {
        duration: 1500,
        iterations: 1
    };

    let tempBaisse = 700;

        let timer = setInterval(OnLampe, tempBaisse);

    let pointsDisplay = document.querySelector('.points span');
    let points = 0;
    let time = divPoints.querySelector('.time span');



if(lampeOn.length > 0){
    for(let i = 0; i < lampeOn.length; i++){
        ClickLamp(lampeOn[i]);
    }
}
        function refreshValues(){
     lampeOn = fenetreG.querySelectorAll('rect.on');
     lampeOff = fenetreG.querySelectorAll('rect.off');
    tempBaisse = tempBaisse - points * 10 ;
    }



    function ClickLamp(element){
        element.addEventListener("mouseenter", e => {
            if(element.classList.contains('On')) {
                element.classList.remove('On');
                element.classList.add('off');
                test = lampeOn.length / lampe.length;
                refreshValues() ;
                console.log(lampeOff.length);
                console.log(lampe.length);

                if(lampeOff.length === lampe.length){
                    console.log("fini");
                    let divFin = document.querySelector('.endPopUp');
                    divFin.style.display = 'flex';
                    clearInterval(timer)
                    gameWindow.animate(endGame, endGameTime);
                    gameWindow.style.transform = 'translateY(200%)';
                }
                PercentBar();
            }

        })

    }
    function OnLampe() {
    refreshValues() ;
        if (lampeOff.length > 0) {
            let randomNombre = Math.floor(Math.random() * lampeOff.length);

            let LampeAEteindre = lampeOff[randomNombre];

            LampeAEteindre.classList.add("On");
            LampeAEteindre.classList.remove('off');
            ClickLamp(LampeAEteindre);
            refreshValues();

        }
        PercentBar();
    }
    function addTime(){
        time.innerHTML++;
    }

    setInterval(addTime,1000);

//
// let lampes;
// let tempsTotal = 0 ; // temps depuis le début de la partie
//
// let statutLampe = ["Allumé", "En cours d'allumation", "Eteinte", "Bonus/malus"]
    let nombreLampe = 10 ; // A voir si ce n'est pas un selecteur
//
// let points = 0 ; // Augmentation des points en fonction du nombre de niveau à chaque click sur une lampe
//
// let tempsBaisse = 700 ;
// let tempsBase = 700 ;
//
// let paliers ; // à voir
//
// if (points > 0){
//     tempsBaisse = tempsBase / points * 17  ;
// }
//
// let personne ; // BOOL
//
//
// function calculAffichagePoint(){
//     // Ajoute les points et modifie l'affichage sur la vue
// }
//
// function allumeUneLampe( bool_incursif = false){
//
//     //selectionne une lampe aléatoirement
//     // regarde si une lampe est allumée
//     // allume une lampe en fonction du tempsBaisse
//
//     let rand = rand(0, 3000 - point ) ;
//     if (rand <100) {
//         // rand(allumeUneLampe(true))
//     } // à perfectionner avec les tests
//     // change le statut de la lampe
//
// }
//
// function eteintUneLampe(element){
//
//
// //touch ne marche pas sur pc !!! il faut :
//
// lampes.addEventListener('touch', ClickTouch()); //Sur mobile
// lampes.addEventListener('click', ClickTouch()); //sur pc et tablette --> //les deux listener lance la même fonction donc pas de beug mais à voir si c'est pas mieux de faire deux fonctions différentes pour éviter certains beug
//
//     function ClickTouch (){
//     if (statut == allumé){
//         eteintUneLampe(lampe)
//     } else if (statut == eteint){
//         // MALUS
//     }  else {
//         //rien
//     }
//     }
//
//
// function verifiePartiePerdue(){
//     //vérifie si toutes les lampes sont allumées
//     messageDeFin() ;
// }
//
//
// function messageDeFin(){
//     //affiche les scores et les liens vers les tops player
//     // + envoie les scores en json
// }
//
//
// //BONUS et MALUS
})
