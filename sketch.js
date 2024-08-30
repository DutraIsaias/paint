let cor 
let x
let y



function setup() {
  createCanvas(400, 400);
  background(220);
  cor = color(random(0,255),random(0,255),random(0,255));
      
  
  x = 200;
  y = 200;
  
}

function draw() {
  

  
  circle(x,y,50);
  fill(cor);
  
  if(mouseX < 200) {
    x = x-1; 
  }   
  
  if(mouseX > 200) {
    x = x+1; 
  }  
  
  if(mouseY < 200) {
    y = y-1; 
  }   
  
  if(mouseY > 200) {
    y = y+1; 
  }  
  if (mouseIsPressed){
    
    cor = color(random(0,255),random(0,255),random(0,255));
    
  }
  
  
  
}

