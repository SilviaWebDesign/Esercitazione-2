//creo la classe Particle
class Particle {
  constructor() {
    this.position = createVector(random(0, width), random(0, height));
//vettore con direzioni random con magnitudine 1
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    
    this.maxSpeed = 50;
    this.maxForce = 1;
  }
//creo dei confini
  edges() {
// se la posizione delle particelle supera la larghezza
// riportale alla posizione 0
// se invece è < 0 impostala uguale alla largezza
    
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    
     if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.x = height;
    }
  }

//sistemo la velocità che desidero 
//in base al disegno creato
  seek() {
    let x = map(this.position.x, 0, width, 0, 1) * scl;
    let y = map(this.position.y, 0, height, 0, 1) * scl;
// creo una variabile equal to chladni function
// map tra 0 e 255 e riempio i riquadri in base a val
      //let val = map(chladni(x, y), -2, 1, 0, 255);
    let val = chladni(x, y);
    
    let target = this.position.copy();
    
// se val è superiore a 0 allora sarà colorato di nero
// altrimenti sarà bianco
// in questo modo ad ognii frame le particelle
// si muoveranno sempre piu vicine alle linee nodali
    if (abs(val) > threshold) {
      target.x += random(-9, 9);
      target.y += random(-9, 9);
      
      } 
      
    let desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    let steering = p5.Vector.sub(desired, this.velocity);
    steering.limit(this.maxForce);
    
//  abbiamo definito l'accellerazione con cui il target si muove
    
    return steering;
        
  }
  
//metto in movimento le particelle
  update(){
    this.edges();
    
    this.acceleration.add(this.seek());
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
// disegno la particella
  display() {
    stroke(255, 0, 255);
    point(this.position.x, this.position.y);
  }
  
 
}