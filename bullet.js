class Bullet{
constructor(x,y, angle){
    this.angle=angle
    this.sprite=createSprite(x,y,windowWidth/32, windowHeight/32)
    this.sprite.shapeColor="yellow"
}
shoot(){var velocity = p5.Vector.fromAngle(angle);
    velocity.mult(20);
    this.sprite.setVelocity(velocity.x,velocity.y )}
    

}