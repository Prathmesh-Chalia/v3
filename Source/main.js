
let GameState = 0;
var Menu
var Cam

var startImg1, startImg2
var startButton;

var Player, PlayerSprite
var island;
var Level1;
var click
var SoundRecentlyPlayed = false

function preload() {

    startImg1 = loadAnimation("Assets/Images/Start Button Not Pressed.png");
    startImg2 = loadAnimation("Assets/Images/Start Button Pressed.png");
    PlayerSprite = loadImage("Assets/Images/player.png");

    //Sound Effects
    click = loadSound("Assets/Music/Mouse-Click.mp3");

}

function setup() {
    createCanvas( window.innerWidth, window.innerHeight )

    startButton = createSprite( window.innerWidth / 2, window.innerHeight / 2, 100, 50 );
    startButton.visible = true

    Player = createSprite( 250, 200, 20, 20 );
    Player.x = width / 2
    Player.y = height / 2
    Player.addImage("player", PlayerSprite)
    Player.visible = false;

    island = createSprite( 250, 250, width * 1.2, height * 1.2 );
    island.x = width / 2
    island.y = height / 2
    island.depth = Player.depth - 1
    island.visible = false;

    let MenuSettings = {
        img: startImg1, 
        img2: startImg2
    }
    Menu = new MenueScene({ startButton: MenuSettings });

    Level1 = new LevelOne();
    Cam = new Camera(width / 2, height / 2, 1)


}


function draw() {
    background( 255, 255, 255 )

    
    if ( GameState == 0 && Menu ){
        Menu.start()

    }
    if ( GameState == 1 && Menu ) {
        Level1.start()
    }


    drawSprites();
}

