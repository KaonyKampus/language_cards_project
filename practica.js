
const tarjeta = {
    id: 1,
    languages: {
        spanish: { name: "casa", sound: "/location" },
        french: { name: "maison", sound: "/location" }
    },
    image: "/location"
};

const language = "french"
const name = tarjeta.languages[language].name

console.log(name)