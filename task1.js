const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry(country, countries) {
  const country = prompt("Zadej krajinu:");

  if (country === countries) {
    console.log("země");
  } else {
  }
}

const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

const country = prompt("Napiš destinaci:");
const countryInvalid = typeof country !== "string" || country.length === 0;

if (countryInvalid) {
  console.log("Zadali jste neplatný dotaz: " + country);
}

for (let i = 0; i < countries.length; i++) {
  if (countries[i] === country) {
    console.log(
      "Zadaná krajina: " +
        country +
        " se nachází v seznamu krajin na indexe " +
        [i]
    );
    break;
  } else if (countries[i] !== country) {
    console.log(
      "Zadaná krajina " + country + " se nenachází v seznamu krajin."
    );
    break;
  }
}

const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry() {
  const country = prompt("Zadej krajinu:");

  if (typeof country !== "string" || country.length === 0) {
    console.log("Zadali jste neplatný dotaz: " + country);
  } else if (countries.includes(country)) {
    const index = countries.indexOf(country);
    console.log(
      "Zadaná krajina: " +
        country +
        " se nachází v seznamu krajin na indexu " +
        index
    );
  } else {
    console.log(
      "Zadaná krajina " + country + " se nenachází v seznamu krajin."
    );
  }
}

checkCountry();

const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function addCountry() {
  const country = prompt("Zadej krajinu:");

  if (typeof country !== "string" || country.length === 0) {
    console.log("Zadali jste neplatný dotaz: " + country);
  } else if (countries.includes(country)) {
    const index = countries.indexOf(country);
    console.log(
      "Zadaná krajina: " +
        country +
        " se nachází v seznamu krajin na indexu " +
        index
    );
  } else {
    const addCountries = countries.push(country);
    const index = countries.indexOf(country);
    console.log(
      "Zadaná krajina " +
        country +
        " byla úspěšně přidaná do seznamu krajin na indexu: " +
        index +
        ". Celkový počet krajin v seznamu je " +
        countries.length +
        " ."
    );
  }
}

addCountry();

const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function removeCountry() {
  const country = prompt("Zadej krajinu:");

  if (typeof country !== "string" || country.length === 0) {
    console.log("Zadali jste neplatný dotaz: " + country);
  } else if (countries.includes(country)) {
    const index = countries.indexOf(country);
    const removeCountries = countries.splice(index, 1);
    console.log(
      "Zadaná krajina: " +
        country +
        " byla odstraněná se seznamu krajin na indexu " +
        index +
        " . Aktuální počet krajin v seznamu je " +
        countries.length
    );
  } else {
    console.log(
      "Zadaná krajina " + country + " se nenachází v seznamu krajin."
    );
  }
}

removeCountry();
