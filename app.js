const API_URL = "https://dog.ceo/api/breeds/image/random/3";
const randomDogs = document.querySelector(".random-dogs")
const goBtn = document.querySelector(".go-button");
const loadingBtn = document.querySelector(".loading")
loadingBtn.style.display = "none";
async function getRandomDogs(){
    randomDogs.innerHTML = "";
    loadingBtn.style.display = "";
    const response = await fetch(API_URL);
    const json = await response.json();    
//     <div class="column">
//         <div class="card">
//             <div class="card-image">
//                 <figure class="image is-4by3">
//                 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
//                 </figure>
//             </div>       
//         </div>
//     </div>
    json.message.forEach(dogImage => {
        
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        columnElement.appendChild(cardElement);
        
        const cardImageElement = document.createElement("div");
        cardImageElement.classList.add("card-image");
        cardElement.appendChild(cardImageElement);

        const figureElement = document.createElement("figure");
        figureElement.classList.add("image");
        figureElement.classList.add("is-4by3");
        cardImageElement.appendChild(figureElement);
        
        const imageElement = document.createElement("img");
        imageElement.src = dogImage;
        figureElement.appendChild(imageElement);

        randomDogs.appendChild(columnElement);
    })
    loadingBtn.style.display = "none";
}


getRandomDogs();

goBtn.addEventListener("click",getRandomDogs);