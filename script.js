/****************** shuffle niza, splitovanje na 2 od po 16, [0] iz prvog niza igra sa [0] iz drugog niza, rezultat je random broj od 0 do 5... pobednike ubacujemo u novi niz, split niza sa 2 i sve tako dok ne ostane 1 zemlja
 * ispisati ko je sa kim igrao i koliko poena */
let participants = document.querySelector(".participants");
let btnClick = document.getElementById("btnStart");
btnClick.addEventListener("click", () => {
  document.getElementById("table-32").innerHTML = "";
  const countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "The Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let countriesShuffle = shuffleArray(countries);
  console.log(countriesShuffle);
  let first32 = countriesShuffle.slice(0, 32);
  console.log(first32);
  let arr1 = [];
  let arr2 = [];

  function splitArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
      arr1.push(array[i]);
    }
    for (let j = array.length - 1; j >= array.length / 2; j--) {
      arr2.push(array[j]);
    }
    return arr1, arr2;
  }
  splitArray(first32);

  participants.innerHTML = arr1 + "<br>" + arr2;
  console.log(arr1);
  console.log(arr2);
  let winners = [];

  function result(a, b) {
    let niz = [0, 1, 2, 3, 4, 5];
    let v1 = Math.floor(Math.random() * niz.length);
    let v2 = Math.floor(Math.random() * niz.length);
    if (v1 > v2) {
      winners.push(a);
    } else if (v1 < v2) {
      winners.push(b);
    } else {
      result(a, b);
    }
    return v1 + ":" + v2;
  }

  function game(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      document.getElementById("table-32").innerHTML +=
        "<tr>" +
        "<td>" +
        arr1[i] +
        " - " +
        arr2[i] +
        "  " +
        result(arr1[i], arr2[i]) +
        "</td>" +
        "</tr>" +
        "<br>";
    }
  }
  winners = [];
  game(arr1, arr2);

  document.getElementById("table-32").innerHTML += winners + "<br><br>";

  function again() {
    arr1 = [];
    arr2 = [];
    splitArray(winners);
    console.log(arr1);
    console.log(arr2);
    winners = [];
    game(arr1, arr2);
    console.log(winners);
    document.getElementById("table-32").innerHTML += winners + "<br><br>";
  }
  again();
  again();
  again();
  again();
});

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
  participants.innerHTML = "";
  document.getElementById("table-32").innerHTML = "";
});
