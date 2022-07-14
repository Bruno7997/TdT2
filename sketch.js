var canvas;
var p,x=0,y=0, X=0, Y=0
var m = [],mp=[], buls = []
var r = 1
var dx=10000000,dy=10000000
var angle, v1, v2
function preload() {
  p = createSprite(windowWidth/2, windowHeight/2,windowWidth/16, windowHeight/16)
p.shapeColor = "gray"


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
  
  v1=createVector(p.position.x,p.position.y-50);v2=createVector(mouseX,mouseY);angle=v1.angleBetween(v2)

  background(200,200,200);
  //Movimento
  if(keyIsDown(RIGHT_ARROW)){x=2.5}else if(keyIsDown(LEFT_ARROW)){x=-2.5}else(x=0)
  if(keyIsDown(DOWN_ARROW)){y=2.5}else if(keyIsDown(UP_ARROW)){y=-2.5}else(y=0)
  p.setVelocity(x,y) 

for (var i=0;i<m.length;i++){
  //Velocidade
  m[i].speed(p.position.x,p.position.y)
  //Radar (distancia entre o cinza e o preto mais proximo)
  if (mp[i].x-p.position.x<0){if (p.position.x-mp[i].x<dx){dx=p.position.x-mp[i].x}}
  if (mp[i].x-p.position.x<dx){dx=mp[i].x-p.position.x}
  radar()
}
//Balas
for (var i=0;i<buls.length;i++){
  //buls[i].display()
  //Destruir balas
  if (buls[i].x >= width || buls[i].x <= width || buls[i].y >= height || buls[i].y <= height) {
buls[i].destroy()
    buls.splice(i, 1);
  }
}
  drawSprites()

}
function keyPressed() {
  //Espaço:
  if(keyCode===32){
    var mons = new Monster(100, 0)
    m.push(mons)
  }
  //R:
  if(keyCode===82){
    r=-r
  }
  //W:
  if(keyCode===87){
    var bul = new Bullet(p.position.x,p.position.y,angle)
    bul.shoot()
    buls.push(bul)
  }
}
function radar(){
  if (r==1){
  stroke("black")
  fill("red")
  textSize(windowHeight/50)
  text(dx+"  -  "+dy,windowWidth/2, windowHeight/2-windowHeight/2.25)
}}
