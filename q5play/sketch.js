await Canvas(800, 600);

world.gravity.y = 20;

let player = new Sprite();
player.y = -400;
player.x = -300;
player.bounciness = 0.4;
player.width = 50;
player.height = 50;
player.img = "🤪";
player.debug = true;
player.rotationLock = true;

let measuredMillis = 0;
let platformSpawnTime = 1000;

const platforms = new Group();

q5.update = function () {
  background("skyblue");

  // Spielersteuerung
  if (kb.presses("up")) player.vel.y = -5;
  if (kb.pressing("left")) player.vel.x = -5;
  else if (kb.pressing("right")) player.vel.x = 5;
  else player.vel.x = 0;

  if (millis() > measuredMillis + platformSpawnTime) {
    measuredMillis = millis();

    let platform = new platforms.Sprite();
    platform.x = 400;
    platform.y = random(-400, 400);
    platform.width = random(20, 200);
    platform.height = 20;
    platform.rotation = 0;
    platform.physics = KIN;
    platform.vel.x = -4;
  }

  // Alte Plattformen entfernen
  for (let platform of platforms) {

		if(platform.collides(player)) {
			platform.vel.y = 10
		}

    if (platform.x < -600) {
      platform.delete();
    }
  }


};
