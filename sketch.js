const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new pendulum(340, 450, "#00b0ff");
  pendulum2 = new pendulum(400, 450, "#e91e63");
  pendulum3 = new pendulum(460, 450, "#ffc108");
  pendulum4 = new pendulum(520, 450, "#e91e63");
  pendulum5 = new pendulum(580, 450, "#00b0ff");

  sling1 = new sling(pendulum1.body, { x: 340, y: 200 });
  sling2 = new sling(pendulum2.body, { x: 400, y: 200 });
  sling3 = new sling(pendulum3.body, { x: 460, y: 200 });
  sling4 = new sling(pendulum4.body, { x: 520, y: 200 });
  sling5 = new sling(pendulum5.body, { x: 580, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}