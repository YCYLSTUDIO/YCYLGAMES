let clicknum = 0;
function clickt() {
  clicknum++;
  document.getElementById("numcl").innerHTML = clicknum;
  //kirim fire
  tambah();
}

function setaupdate(json) {
  const par = document.getElementById("tam");
  par.innerHTML = "";
  for (let i = 0; i < json.length; i++) {
    const namap = json[i].nama;
    const nump = json[i].num;

    const cda = document.createElement("div");
    cda.innerHTML =
      `<h2>` +
      namap +
      `</h2>
                            <h3 id="ncl">` +
      nump +
      `</h3>`;
    cda.classList.add("ply");
    par.appendChild(cda);
  }
}

let log = false;
let namapl;
function mnl2(json) {
  let adas = false;
  const namain = document.getElementById("namain");
  for (let i = 0; i < json.length; i++) {
    const namap = json[i].nama;
    if (namap == namain) {
      adas = true;
    }
  }
  if (!adas) {
    if (namain.value.length > 2 && namain.value.length < 12) {
      namapl = namain.value;
      log = true;
      mkg();
    } else {
      alert("Nama Harus 3-11 karakter");
    }
  }
}

function mkg() {
  const start = document.getElementById("start");
  const game = document.getElementById("game");
  start.classList.add("n");
  game.classList.remove("n");
}

setInterval(() => {
  if (log) {
    gdff();
  }
}, 1000);
