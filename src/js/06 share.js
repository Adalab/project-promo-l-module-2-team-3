'use strict';

const shareBtn = document.querySelector(".jssharebtn");
const linksContainer = document.querySelector (".jssharelinks");
const textUrl = document.querySelector (".jsShareText");
const linkUrl = document.querySelector (".jsUrl");




function handleShare(ev) {
shareBtn.style.backgroundColor = "grey";
    const urlServe = 'https://profileawesome.herokuapp.com/card'; 
    const data = getUserData();
        fetch(urlServe, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
      'content-type': 'application/json'}
    })     
    .then(response => response.json())
        .then(data => {
            linksContainer.classList.remove('share__hidden');                
            if (data.success === true) {
                textUrl.innerHTML = "La tarjeta ha sido creada:"; 
                linkUrl.innerHTML = data.cardURL;
            } else{
                textUrl.innerHTML = "Ups! No se ha podido crear tu tarjeta.";
            }


            console.log (data);
            });    
}

shareBtn.addEventListener ('click', handleShare)