
/**
 * Afficher un décompte.  Tous les `delai` millisecondes, on affiche le
 * décompte comme valeur du champ `#countdown-value`  (innerText).
 */
function countdown(delai) {
    const formulaire = document.getElementById("countdown-form");
    let interval = setInterval(countdouwn_function, delai);
    const countdownValue = document.getElementById("countdown-value");

    countdownValue.innerText = formulaire.initialValue.value


    //decrementer
    function countdouwn_function(){
        console.log("decrementer");
        if (countdownValue.innerText > 0) {
            countdownValue.innerText -= 1 ; 
        }else {
            stop();
        }          
    }
    // stop du countdown
    function stop_countdown() {
        if (interval != null){
            clearInterval(interval);
            interval = null;
        }
    }

    //Decrementer que quand on clique sur resume
    function resume_function(){
        if (interval === null){
            interval = setInterval(countdouwn_function, delai);
        }
    }
     
    // reset 
    function reset_function(){
        countdownValue.innerText = formulaire.initialValue.value;
    }
     
    // Écrire la valeur intermédiaire
    function intermediate_interval() {
        console.log("Valeur actuelle du décompte :", countdownValue.innerText);
        const li = document.createElement("li");
        li.innerText = countdownValue.innerText; 
        document.getElementById("intermediate-list").appendChild(li); 
    }

    formulaire.stop.addEventListener('click',stop_countdown);
    formulaire.resume.addEventListener('click',resume_function);
    formulaire.reset.addEventListener('click',reset_function);
    formulaire.intermediate.addEventListener('click',intermediate_interval);
}

window.addEventListener("load", () => countdown(1000));
