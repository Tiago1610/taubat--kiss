const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64*16 //1024
canvas.height= 64* 9 // 576

let parsedCollosions 
let collisionBlocks 
let background 
let doors 
const player = new Player({
    imageSrc  : './img/maho/idle.png',
     frameRate : 11,
    animations: {
        idleRight: {
            frameRate:  11,
            frameBuffer: 5,
            loop: true,
            imageSrc  : './img/maho/idle.png',
        },
        runRight: {
            frameRate:  8,
            frameBuffer:5,
            loop: true,
            imageSrc  : './img/maho/walk.png',
        },
        runLeft: {
            frameRate:  8,
            frameBuffer:5,
            loop: true,
            imageSrc  : './img/maho/walk2.png',
        },
        enterDoor: {
            frameRate:  8,
            frameBuffer:5,
            loop: false,
            imageSrc  : './img/maho/fim.png',
            onComplete: () => {
                console.log('completed animation')
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++
                        if (level === 10 ) level = 1
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay,{
                            opacity: 0,
                        })
                    }
                })
            }
        },
    },
})
let level = 1
let levels = {
    1:{
        init: () => {
            parsedCollosions      = colsionlevel1.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 250
            player.position.y = 320

            if(player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel1.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 767,
                        y: 272,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    },
    2:{
        init: () => {
            parsedCollosions      = colsionlevel2.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if(player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel2.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 782,
                        y: 336,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    },
    3:{
        init: () => {
            parsedCollosions      = colsionlevel3.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 750
            player.position.y = 230

            if(player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel3.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 175,
                        y: 336,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                })
            
            ]
        }
    },
    4:{
        init: () => {
            parsedCollosions      = colsionlevel4.parse2D()
            collisionBlocks       =  parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 750
            player.position.y = 230

            if(player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel4.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 145,
                        y: 335,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                })
            
            ]
        }
    },
    5:{
        init: () => {
            parsedCollosions      = colsionlevel5.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 50
            player.position.y = 150

            if(player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel5.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 880,
                        y: 400,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    },
    6:{
        init: () => {
            parsedCollosions      = colsionlevel6.parse2D()
            collisionBlocks       =  parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 850
            player.position.y = 150

            if(player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel6.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 50,
                        y: 400,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                })
            
            ]
        }
    },
    7:{
        init: () => {
            parsedCollosions      = colsionlevel7.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 50
            player.position.y = 400

            if(player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel7.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 880,
                        y: 400,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    },
    8:{
        init: () => {
            parsedCollosions      = colsionlevel8.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if(player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel8.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 880,
                        y: 145,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    },
    9:{
        init: () => {
            parsedCollosions      = colsionlevel9.parse2D()
            collisionBlocks       = parsedCollosions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 700
            player.position.y = 400

            if(player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : 'img/bgLevel9.png',
            })
            doors = [
                new Sprite({
                    position:{
                        x: 880,
                        y: 400,
            
                    },
                    imageSrc   : './img/ge/ge.png',
                    frameRate  :8,
                    frameBuffer:5,
                    loop       : false,
                    autoPlay   : false,
                }),
            
            ]
        },
    }
}
const keys = {
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
}
const overlay = {
    opacity : 0
}

function animate() {
    if (player.position.y >= canvas.height) {
        levels[level].init()
    }
    window.requestAnimationFrame(animate)

    
    background.draw()
    /*collisionBlocks.forEach((collisionBlock) =>{
        collisionBlock.draw()
    })*/
    doors.forEach((door) =>{
        door.draw()
    })
    player.handleInput(keys)
    player.draw()
    player.update()

    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'pink'
    c.fillRect(0,0, canvas.width, canvas.height)
    c.restore()
}
let clicked = false 
addEventListener('click', () => {
    if (!clicked){
        audio.Map.play()
        clicked = true
    }
})
levels[level].init()
animate()


