const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

function percentageOfTotalPopulation(population, total) {
  let result1 = (population / total) * 100;
  return result1.toFixed(2);
}

const countriesWithPercentageOfTotalPopulation = countriesPopulation.map(
  (country) => {
    {
      return {
        ...country,
        percent: percentageOfTotalPopulation(
          country.population,
          populationTotal
        ),
      };
    }
  }
);

console.log(
  "countriesWithPercentageOfTotalPopulation: ",
  countriesWithPercentageOfTotalPopulation
);

const copyCountries = countriesPopulation.slice();

const copyCountries2 = countriesPopulation.slice();

copyCountries2.sort(function (a, b) {
  if (a.population > b.population) {
    return 1;
  } else if (a.population < b.population) {
    return -1;
  }
});

console.log("Od nejměnšího po největší: ", copyCountries2);

const novePoleStatu = copyCountries.map((a, i) => {
  return {
    ...a,
    id: a.country.substr(0, 3) + i,
  };
});
console.log("NovéPoleStátu: ", novePoleStatu);

function populationCalc(population, total) {
  let result = (population / total) * 100;
  return result.toFixed(2);
}

const perOfCountries = novePoleStatu.map((country) => {
  {
    return {
      ...country,
      percentage: populationCalc(country.population, populationTotal),
    };
  }
});

console.log("Procenta populace a ID:", perOfCountries);

const countryNameLenght = perOfCountries.filter(function (name) {
  let result2 = name.country.length > 4 && name.country.length <= 8;
  return result2;
});

const countryPercent = countryNameLenght.filter(function (percent) {
  let result3 = percent.percentage > 1.5 && percent.percentage < 10;
  return result3;
});
console.log("Objekty splňující podmínky:", countryPercent);
