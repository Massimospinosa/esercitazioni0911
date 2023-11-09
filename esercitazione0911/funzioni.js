
const contenitore = document.getElementById("contenitore")
const random = Math.floor(Math.random() * 77);
    


const creazionecelle = function(){
    for(let i = 0 ; i < 76 ; i++){
        const divCelle = document.createElement("div");
        const pCelle = document.createElement("p");
        pCelle.textContent = i + 1;
        divCelle.appendChild(pCelle)
        contenitore.appendChild(divCelle)
    }
}
const numeroEstratto = function(){
    const bottone = document.getElementById("Estrazione")
    const numeroselezionato = document.querySelectorAll("p")
    bottone.addEventListener("click",)
}


//fare la funzione che al click estrae numero
//il numero selezionato è colorato diversamente







creazionecelle()