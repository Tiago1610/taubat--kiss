class Player extends Sprite {
    constructor({collisionBlocks = [], imageSrc, frameRate, animations, loop }){
        super({ imageSrc, frameRate, animations, loop })
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        //this.width = 25
        //this.height = 25
        this.sides = {
            bottom : this.position.y + this.height
        }
            this.gravity = 1
            //if (this.sides.bottom >= canvas.height){console.log('you loose')}
            this.collisionBlocks = collisionBlocks
            console.log(this.collisionBlocks)
    }

    update(){
        //essa é ca caixa azul :)
        //c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        this.position.x += this.velocity.x
        this.updateHitbox()
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.updateHitbox()
        this.checkForVerticalCollisions()
    }
    handleInput(keys){
    if (this.preventInput) return
    this.velocity.x = 0
    if (keys.d.pressed&&!keys.a.pressed) {
        this.switchSprite('runRight')
        this.velocity.x =  5
    }
    else if (keys.a.pressed&&!keys.d.pressed){ 
        this.switchSprite('runLeft')
        this.velocity.x = -5
    }
    else this.switchSprite('idleRight')
    }

    updateHitbox(){
        this.hitbox = {
            position:{
                x : this.position.x+35,
                y : this.position.y+11
            },
            width : 50,
            height: 100,

        }

    }
    
    
    switchSprite (name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image           = this.animations[name].image
        this.frameRate       = this.animations[name].frameRate
        this.frameBuffer     = this.animations[name].frameBuffer
        this.loop            = this.animations[name].loop
        this.currentAnimation= this.animations[name]
    }

    checkForHorizontalCollisions(){
        for(let i = 0; i<this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]

            //if a colision exist 
            if (this.hitbox.position.x <= collisionBlock.position.x +  collisionBlock.width      &&
                this.hitbox.position.x +  this.hitbox.width         >= collisionBlock.position.x &&
                this.hitbox.position.y +  this.hitbox.height        >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y +  collisionBlock.height
                
                ) {
                    //Colosão no eixo x a direita
                   if (this.velocity.x < 0){
                       const offset = this.hitbox.position.x - this.position.x
                       this.position.x =
                       collisionBlock.position.x + collisionBlock.width - offset + 0.01
                       break
                   }
                   if (this.velocity.x > 0){
                       const offset    = this.hitbox.position.x - this.position.x +this.hitbox.width
                       this.position.x =collisionBlock.position.x - offset - 0.01
                       break
                }
            }

        }
    }
    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    checkForVerticalCollisions(){
        for(let i = 0; i<this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]

            //if a colision exist 
            if (this.hitbox.position.x <= collisionBlock.position.x +  collisionBlock.width      &&
                this.hitbox.position.x +  this.hitbox.width         >= collisionBlock.position.x &&
                this.hitbox.position.y +  this.hitbox.height        >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y +  collisionBlock.height
                
                ) {
                    //Colosão no eixo y 
                   if (this.velocity.y < 0){
                       this.velocity.y = 0
                       const offset = this.hitbox.position.y - this.position.y
                       this.position.y =
                       collisionBlock.position.y + collisionBlock.height- offset + 0.01
                       break
                   }
                   if (this.velocity.y > 0){
                       this.velocity.y = 0
                       const offset    = this.hitbox.position.y - this.position.y +this.hitbox.height
                       this.position.y =collisionBlock.position.y - offset - 0.01
                       break
                }
            }

        }
    }
}