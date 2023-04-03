// 7-7. 
// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст.
//  Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна -
//   в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, 
//   через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>

// <select name="cities" id="cities"></select>
// <p></p>

const cityList = {
    ger: ["Berlin", "Hamburg", "Munich", "Hannover"],
    usa: ["New York", "Washington", "Boston", "Chicago"],
    ukr: ["Kyiv", "Kharkiv", "Lviv", "Donetsk"]
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const result = document.getElementById("result");

countrySelect.addEventListener("change", function () {

    const selectedCountry = countrySelect.value;
    const cities = cityList[selectedCountry];

    citySelect.innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.text = cities[i];
        citySelect.add(option);
    }
    result.textContent = countrySelect.options[countrySelect.selectedIndex].text + ", " + citySelect.options[citySelect.selectedIndex].text;
});


citySelect.addEventListener("change", function () {
    result.textContent = countrySelect.options[countrySelect.selectedIndex].text + ", " + citySelect.options[citySelect.selectedIndex].text;
});
