//definisco le variabili cols e rows per x e y
let cols, rows; let size = 1;
// modificando questi valori ottengo più combinazioni
// threshold non è 0 per sistemare eventuali errori
// che possono crearsi nell'esecuzione
let m = 1; let n = 5; let threshold = 0.05;

function setup() {
  createCanvas(1600, 1000);
  cols = width/size;
  rows = height/size;
}

function draw() {
  background(220);
  noStroke();

// definisco due loop per i e j
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
// mappo x e y per avere un range
// verifico il range tramite print
      let x = map(i, 0, cols, 0, 1);
      let y = map(j, 0, rows, 0, 1);
// creo una variabile equal to chladni function
// map tra 0 e 255 e riempio i riquadri in base a val
      //let val = map(chladni(x, y), -2, 1, 0, 255);
      let val = chladni(x, y);
// se val è inferiore a 0 allora sarà colorato di nero
// altrimenti sarà bianco
      if (abs(val) < threshold) {
        fill(0);
      } else {
        fill(255);
      }
// creo una griglia di quadrati tramite rect
      rect(i*size, j*size, size, size);
    }
  }
// static 
  noLoop();
}

// definisco la funzione chaldni e inserisco l'equazione omonima
function chladni(x, y) {
  let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) -
         cos(m * PI * x / L) * cos(n * PI * y / L);
}