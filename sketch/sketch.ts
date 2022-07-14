function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('white');

  const circlesArray = calculatePackedCircles(width, height);

  const orderedRadii = circlesArray.sort((a: Circle, b: Circle) => b.radius - a.radius)

  
  for (let i=2; i < orderedRadii.length; i++) {
    const c: Circle = orderedRadii[i]
    drawCircle(c);
  }
}

const palette = [
  "#ecd078",
  "#d95b43",
  "#c02942",
  "#542437",
  "#53777a"
]



function drawCircle(c: Circle) {
  const shade = random(50, 100);
  fill(random(palette));
  noStroke();

  if (c.radius < 20) {
    circle(c.pos.x, c.pos.y, c.radius * 2);
  }
  
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
