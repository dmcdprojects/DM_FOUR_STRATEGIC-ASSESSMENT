/// 4. STRATEGIC ASSESSMENT

let numCircles = 6;
let circles = [];
let duration = 9; // segundos
let maxOffset = 45; // menor para caber no canvas 200x200

function setup() {
  let cnv = createCanvas(200, 200);
  cnv.style('background', 'transparent'); // fundo transparente
  strokeWeight(1.2);
  noFill();

  for (let i = 0; i < numCircles; i++) {
    let angle = map(i, 0, numCircles, 0, TWO_PI);
    let target = p5.Vector.fromAngle(angle).mult(maxOffset);
    circles.push({ target });
  }
}

function draw() {
  clear(); // fundo transparente
  translate(width / 2, height / 2);

  stroke(255); // traço branco

  let t = (millis() / 1000) % duration;
  let phase = sin(TWO_PI * t / duration); // vai e volta suavemente
  let eased = (phase + 1) / 2;

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];

    let x = lerp(0, c.target.x, eased);
    let y = lerp(0, c.target.y, eased);

    ellipse(x, y, 85); // menor diâmetro para caber no canvas
  }
}