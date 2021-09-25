document.addEventListener("DOMContentLoaded", function () {
	init();
});

const TEMPLATE_COUNTRY_GRID = '#countriesTemplate';
const TEMPLATE_COUNTRY_GRID2 = '#countryTemplate';
let country = [];

const p = document.querySelector(".yo")
let names; 


const init = () => {
    fetchCounteirs().then(data => {
		renderTemplateData(data, TEMPLATE_COUNTRY_GRID, ".card-wrapper");
        getCountryName(data);

        document.querySelector("select").addEventListener("change", () => {
            pickCountry();
        })
	});

}

const fetchCounteirs = () => {
    return fetch("https://restcountries.eu/rest/v2?")
    .then(response => response.json())
    .catch(error => console.log(error));
}

const fetchCountry = (countryName) => {
    return fetch("https://restcountries.eu/rest/v2/name/" + countryName)
    .then(response => response.json())
    .catch(error => console.log(error));
}

const renderTemplateData = (data, template, selector) => {
    console.log(data[0].currencies);            
    const container = document.querySelector(selector);
    console.log(container);

    if(container) {
        const source = document.querySelector(template).innerHTML;

	    const compiled = Handlebars.compile(source);

	    container.innerHTML += compiled({ data });
    }
}

const getCountryName = (data) => {
    names = data.map(data => data.name)

    createDropdown()
}

const createDropdown = () => {
    let select = document.createElement("select");
    
    names.forEach(element => {
        let option = document.createElement("option");
        option.innerHTML = element;
        select.append(option);
        p.append(select);
    });
}

const pickCountry = () => {
    const countryName = document.querySelector("select").value;

    const grid = document.querySelector(".card-wrapper");
    grid.style.display = "none";

    fetchCountry(countryName).then(data => renderTemplateData(data, TEMPLATE_COUNTRY_GRID2, ".js-wrapper"));
    showCard(data);
}

// async function getCountries() {
//     let countries = await fetch("https://restcountries.eu/rest/v2")
//         .then(response => response.json())
//         .then(data => data);
    
//     names = countries.map(data => data.name)

//     countries.forEach(key => {
//         console.log(key.currencies[0].name)
//     })
    
//     console.log(countries)

//     createDropdown()
// }


