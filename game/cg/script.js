const rules = { map: 6, poin: 10 };

let elementselect = [];
function rotate3d(element) {
  if (elementselect.length < 2 && element.getAttribute("data-to") == "false") {
    element.classList.toggle("rotated");

    if (elementselect.includes(element)) {
      elementselect = elementselect.filter((element2) => element2 !== element);
    } else {
      elementselect.push(element);
      ces();
    }
  }
}

let scoreuser = 0;
let benars = 0;
function ces() {
  setTimeout(() => {
    if (elementselect.length == 2) {
      const jsones = Array.from(elementselect, (el) =>
        el.getAttribute("data-ty")
      );

      if (jsones.every((value) => value === jsones[0])) {
        for (let i = 0; i < elementselect.length; i++) {
          //benar
          elementselect[i].children[1].children[0].className = "";
          //toggle
          elementselect[i].setAttribute("data-to", "true");
          //rotate
          elementselect[i].classList.toggle("rotated");
        }
        scoreuser = scoreuser + rules.poin;
        benars++;
        elementselect.length = 0;
      } else {
        for (let i = 0; i < elementselect.length; i++) {
          //rotate
          elementselect[i].classList.toggle("rotated");
        }
        elementselect.length = 0;
      }

      if (benars == map[rules.map] / 2) {
        setup();
        benars = 0;
      }
      scoret();
    }
  }, 1000);
}

function scoret() {
  const scor = document.getElementById("scor");
  scor.innerText = "Score: " + scoreuser;
}

const map = [4, 6, 8, 10, 12, 14, 16];
const type = [
  { name: "0", img: "img/0.png" },
  { name: "1", img: "img/1.png" },
  { name: "2", img: "img/2.png" },
  { name: "3", img: "img/3.png" },
  { name: "4", img: "img/4.png" },
  { name: "5", img: "img/5.png" },
  { name: "6", img: "img/6.png" },
  { name: "7", img: "img/7.png" },
  { name: "8", img: "img/8.png" },
  { name: "9", img: "img/9.png" },
];
function setup() {
  const mapnv = map[rules.map];
  const sranjson = setupran(mapnv);
  const sranmap = setranmap(sranjson);
  setupcl(mapnv, sranmap);
}
function setupran(num) {
  const random = [];
  const usedIndexes = new Set();

  const limit = Math.min(num / 2, type.length);

  while (random.length < limit) {
    const randomIndex = Math.floor(Math.random() * type.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      random.push(type[randomIndex]);
    }
  }

  return random;
}
function setranmap(sran) {
  const json = sran.map((item) => item.name);
  const count = 2; // Jumlah angka yang sama
  const randomArray = [];

  // Menambahkan angka ke dalam array sesuai jumlah yang ditentukan
  json.forEach((num) => {
    for (let i = 0; i < count; i++) {
      randomArray.push(num);
    }
  });

  // Mengacak susunan array
  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Indeks acak
    // Menukar elemen
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }

  return randomArray;
}
function setupcl(num, jsons) {
  const parent = document.getElementById("list");
  parent.innerHTML = "";
  for (let i = 0; i < num; i++) {
    const json = type.find((item) => item.name === jsons[i]);
    const child = document.createElement("div");
    child.classList.add("rotate-3d");
    child.classList.add("rotated");
    child.setAttribute("data-ty", json.name);
    child.setAttribute("data-to", "false");
    child.setAttribute("onclick", "rotate3d(this)");
    child.innerHTML =
      `
        <div class="front">
          <img src="` +
      json.img +
      `" alt="img" />
        </div>
        <div class="back">
          <img src="img/v.png" alt="img" class="n" />
        </div>`;
    parent.appendChild(child);
  }
}
setup();
