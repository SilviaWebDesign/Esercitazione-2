// creo 100 particles
let particles = []; let num = 10000;
let m = 1; let n = 5; let threshold = 0.05;

function setup() {
  createCanvas(1550,725);
  for (let i=0; i<num; i++){
    particles.push(new Particle());
  } 
  
}

function draw() {
  background(0);
  
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