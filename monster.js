class Monster{
    constructor(x,y){
        this.X=0
        this.Y=0
this.width=windowWidth/16
this.heiht=windowHeight/16
    this.sprite = createSprite(this.z,this.y,this.width,this.heiht)
    this.sprite.shapeColor = "black"
    mp.push(this.sprite.position)
}
speed(px,py){
if(this.sprite.position.x>px){this.X=-2}else if(this.sprite.position.x<px){this.X=2}
if(this.sprite.position.y>py){this.Y=-2}else if(this.sprite.position.y<py){this.Y=2}
this.sprite.setVelocity(this.X,this.Y)
}
}