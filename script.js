const cards_information = [
    {
        id: 1,
        languages: {
            spanish: { name: "casa", sound: "/location" },
            english: { name: "house", sound: "/location" },
            german: { name: "Haus", sound: "/location" },
            french: { name: "maison", sound: "/location" }
        },
        image: "/location"
    },
    {
        id: 2,
        languages: {
            spanish: { name: "perro", sound: "/location" },
            english: { name: "dog", sound: "/location" },
            german: { name: "Hund", sound: "/location" },
            french: { name: "chien", sound: "/location" }
        },
        image: "/location"
    },
    {
        id: 3,
        languages: {
            spanish: { name: "gato", sound: "/location" },
            english: { name: "cat", sound: "/location" },
            german: { name: "Katze", sound: "/location" },
            french: { name: "chat", sound: "/location" }
        },
        image: "/location"
    }
]


const language = "spanish"
const buttonsLanguage = document.querySelectorAll(".btn_language")

buttonsLanguage.forEach((buton)=>{
    
})

function createCards(informationArray, language) {

    informationArray.forEach((card) => {
        const cardItem = document.createElement("div");
        cardItem.classList.add("card")
        cardItem.innerHTML = `
            <h2 class="language_card_title">
                ${card.languages[language].name}
            </h2>
            <div class="language_card_image">
                <img src="" alt="">
            </div>
            <button class="language_card_sound">
                Pronunciation
            </button> 
         `


        /* <h2 class="language_card_title">
             hey
         </h2>
         <div class="language_card_image">
             <img src="" alt="">
         </div>
         <button class="language_card_sound">
             Pronounce
         </button>*/

    })

}


createCards(cards_information, language);