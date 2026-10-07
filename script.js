import {cards_information} from "./dataBase.js";

const buttonsLanguage = document.querySelectorAll(".btn_language")
buttonsLanguage.forEach((btnLanguage) => {
    btnLanguage.addEventListener("click", () => {
        console.log("El idioma que recibio fue " + btnLanguage.dataset.language)

        createCards(cards_information, btnLanguage.dataset.language);
    })

})
function createCards(informationArray, language) {
    const cardContainer = document.querySelector(".language_cards_container")
    cardContainer.textContent = ""
    informationArray.forEach((card) => {
        const cardItem = document.createElement("div");
        cardItem.classList.add("card")
        cardItem.innerHTML = `
            <h2 class="language_card_title">
                ${card.languages[language].name}
            </h2>
            <div class="language_card_image">
                <img src="${card.image}" alt="">
            </div>
            <button class="language_card_sound">
                Pronunciation
            </button> 
         `
        cardContainer.append(cardItem)
    })
}
