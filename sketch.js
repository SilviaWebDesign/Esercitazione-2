// creo 100 particles
let particles = []; let num = 10000;
let m = 1; let n = 5; let threshold = 0.05;
let minMN = 1; let maxMN = 6;
let changePattern = true;
//definisco un margine e 4 nuove variabili
//let margin = 50; let w1, w2, h1, h2;
let scl = 3; 

function setup() {
  createCanvas(1550,725);
  //w1 = margin; w2 = width - margin;
  //h1 = margin; h2 = height - margin;
  for (let i=0; i<num; i++){
    particles.push(new Particle());
  } 
  
}

function draw() {
  background(10);

  if (changePattern) {
    randomPatterns();
  }
  
  for (let i=0; i<particles.length; i++){
    particles[i].update();
    particles[i].display();
  }
   
}

function chladni(x, y) {
  let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) -
         cos(m * PI * x / L) * cos(n * PI * y / L);
}

function randomPatterns() {
  m = floor(random(minMN, maxMN));
  n = floor(random(minMN, maxMN));
  
  if (m === n) {
    m = floor(random(minMN, maxMN));
  }
  
  changePattern = false;

  // randomizzo la velocita delle particelle tramite un loop
  for (let i=0; i<particles.length; i++) {
    particles[i].velocity = p5.Vector.random2D().mult(random(2, 8));
  }
}

function mousePressed() {
  changePattern = true; 
}
