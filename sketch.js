const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var main_ball, world, down_wall, engine, big_ball, left_wall, top_wall, right_wall, big_ball2;


function setup() {

  createCanvas(1800, 900);

  engine = Engine.create();
  world = engine.world;

  var bounce_effect = {
    restitution: 0.7
  }

  var no_gravity = {
    isStatic: true
  }

  main_ball = Bodies.circle(200, 100, 20, bounce_effect);
  World.add(world, main_ball);

  big_ball = Bodies.circle(200, 700, 60/*, no_gravity*/);
  World.add(world, big_ball);

  big_ball2 = Bodies.circle(1600, 300, 60/*, no_gravity*/);
  World.add(world, big_ball2);

  down_wall = Bodies.rectangle(1, 900, 3200, 30, no_gravity);
  World.add(world, down_wall);

  left_wall = Bodies.rectangle(1, 900, 30, 3200, no_gravity);
  World.add(world, left_wall);

  top_wall = Bodies.rectangle(1, 1, 3200, 30, no_gravity);
  World.add(world, top_wall);

  right_wall = Bodies.rectangle(1800, 900, 30, 3200,no_gravity);
  World.add(world, left_wall);
}



function draw() {

  background("grey");

  Engine.update(engine);

  ellipseMode(CENTER);
  fill("red");
  ellipse(main_ball.position.x, main_ball.position.y, 20, 20);

  ellipseMode(CENTER);
  fill("blue");
  ellipse(big_ball.position.x, big_ball.position.y, 60, 60);

  ellipseMode(CENTER);
  fill("yellow");
  ellipse(big_ball2.position.x, big_ball2.position.y, 60, 60);
  big_ball2.velocityX = -10;

  rectMode(CENTER);
  fill("green");
  rect(down_wall.position.x, down_wall.position.y, 3600, 30);

  rectMode(CENTER);
  fill("green");
  rect(left_wall.position.x, left_wall.position.y, 30, 3200);

  rectMode(CENTER);
  fill("green");
  rect(right_wall.position.x, right_wall.position.y, 30, 3200);

  rectMode(CENTER);
  fill("green");
  rect(top_wall.position.x, top_wall.position.y, 3600, 30);

  drawSprites();
}