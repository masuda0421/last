let name = ""
let mySprite = sprites.create(assets.image`man`, SpriteKind.Player)
mySprite.setPosition(70, 88)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`home`)
scene.cameraFollowSprite(mySprite)
if (!(blockSettings.exists("name"))) {
    name = game.askForString("You are name ?")
    game.showLongText("" + name + "やあ", DialogLayout.Bottom)
}
game.onUpdate(function () {
	
})
