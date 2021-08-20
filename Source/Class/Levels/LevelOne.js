class LevelOne {

    constructor () {


    }

    start () {

        startButton.visible = false
        island.visible = true
        Player.visible = true

        console.log("Cam ", Cam.position.x)
        console.log("Player ", Player.x)
        
        Cam.on()
        Cam.zoom = 5;
        Cam.position.x = Player.x
        Cam.position.y = Player.y
        
        if ( keyIsDown( LEFT_ARROW ) ) {
            Player.x -= 4

        }

        if ( keyIsDown( RIGHT_ARROW ) ) {

            Player.x += 4

        }

        if ( keyIsDown( UP_ARROW ) ) {

            Player.y -= 4

        }

        if ( keyIsDown( DOWN_ARROW ) ) {

            Player.y += 4

        }

    }

}