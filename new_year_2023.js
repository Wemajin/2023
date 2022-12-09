window.addEventListener('load',function(){
    let fenetreG = document.querySelector('.fenetres');
    let divPoints = document.querySelector('#divPoints');
    let lampe = fenetreG.querySelectorAll('rect');
    let test = 0;
    let tempBaisse = 5000;
        let timer = setInterval(OnLampe, tempBaisse) ;
    let pointsDisplay = document.querySelector('.points span');
    let points = 0;
    let time = divPoints.querySelector('.time span');

    let lampeOn = fenetreG.querySelectorAll('rect.on');
    let lampeOff = fenetreG.querySelectorAll('rect.off');


    for(let i = 0; i < lampe.length; i++){
        ClickLamp(lampe[i]);
    }

        function refreshValues(){
     lampeOn = fenetreG.querySelectorAll('rect.on');
     lampeOff = fenetreG.querySelectorAll('rect.off');
    tempBaisse = tempBaisse - points * 10 ;
    timer = setInterval(OnLampe, tempBaisse) ;
    }

    function ClickLamp(element){
        element.addEventListener("mouseenter", e => {
            if(element.classList.contains('on')) {
                element.classList.remove('on');
                pointsDisplay.innerHTML = points ;
                element.classList.add('off');
                test = lampeOn.length / lampe.length;
                console.log(test);

            }
        })
         refreshValues() ;
    }
    function OnLampe(){
        let randomNombre = Math.floor(Math.random()) * lampeOff.length;

        // if(time.innerHTML > 20){
        //     console.log('ccc');
        //     tempBaisse = time.innerHTML / points.innerHTML * 17;
        // }
        // console.log(time);
        // console.log(points);
        // console.log(tempBaisse);
        // while(true){
        //     if(lampe[randomNombre].classList.contains('On') && lampe.length !== lampeOn.length){
        //         randomNombre = Math.floor(Math.random() * lampe.length);
        //     }
        //     else{
        //         test = lampeOn.length / lampe.length;
        //         break;
        //     }
        // }

        let LampeAAllume = lampeOff[randomNombre];
        console.log(Math.random() ) ;
        LampeAAllume.classList.add("on");
        LampeAAllume.classList.remove('off');

 refreshValues() ;

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
    let lightDiv = document.querySelector('.lightDiv')
    for( let i = 1; i <= nombreLampe; i++){
        let lampe = document.createElement('div')
        lampe.classList.add('lampe')
        lampe.classList.add('lampe'+i)
        lightDiv.appendChild(lampe)
    }
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
