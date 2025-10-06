// creo 100 particles
let particles = []; let num = 10000;
let m = 16; let n = 18; let threshold = 0.05;
let minMN = 1; let maxMN = 6;
let changePattern = true;

function setup() {
  createCanvas(1550,725);
  for (let i=0; i<num; i++){
    particles.push(new Particle());
  } 
  
}

function draw() {
  background(0);

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
}

function mousePressed() {
  changePattern = true; 
}
