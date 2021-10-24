let numX=8;
let numY=5;

//let b;
//let b2;
//array list
let bs = [];

function setup() {
  createCanvas(400, 400);  
  
//  b = new Ball(200, 200);
//  b2 = new Ball(100, 100);

  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      bs.push(new Ball(i*width/numX + width/numX/2,
      j*height/numY + height/numY/2))
    } 
  }
}


 // 持續重複執行
function draw() {
  background(220); 
  bs.forEach((v)=>{
    v.display();
  }
  )
  
//  b.display();
//  b2.display();
}


//object attribute
class Ball{
  //how to construct the object?
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.movex = random(-1.0, 1.0);
    this.movey = random(-1.0, 1.0);
  }
  
  //function
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    this.Bsize();
    this.Bcolor();
    line(this.x, this.y, mouseX, mouseY);
    circle(this.x, this.y, this.size);
    
  }
  
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  
  Bsize(){
    this.size = dist(this.x, this.y, mouseX, mouseY)/10+10;
  }
  
  Bcolor(){
    this.color = fill(dist(this.x, this.y, mouseX, mouseY)/200*255);
  }
  
  bounce(){
    //upper_side bounce
    if(this.y-this.size/2<0){
      this.movey = -1*this.movey;
    }
    //bottom_side bounce
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
    }
     //left_side bounce
    if(this.x-this.size/2<0){
      this.movex = -1*this.movex;
    }
    //left_side bounce
    if(this.x+this.size/2>width){
      this.movex = -1*this.movex;
    }
  }
  
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        //not itself
        console.log('a');
      }else{
        //if x_direct distance too closed
      if (abs(this.x-nb.x)<this.size &&
        dist(this.x, this.y, nb.x, nb.y)<this.size){
        this.movex = -1*this.movex;
        nb.movex= -1*nb.movex;}
      if (abs(this.y-nb.y)<this.size &&
      dist(this.x, this.y, nb.x, nb.y)<this.size){
      this.movey = -1*this.movey;
      nb.movey= -1*nb.movey;}
      } 
    });
  }
  
  
}









