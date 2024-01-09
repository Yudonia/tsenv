import p5 from "p5";
import math from "math";

document.body.style.margin = "0";

export const sketch = (p) => {

  function normtr(x, y, r, ud) {
    p.triangle(x, y, x + r, y, x + r / 2, y + ud * r * 3 ** (0.5) / 2)
  }

  p.setup = () => {

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    x=100;
    y=100;

  }

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
      // console.log(p.mouseIsPressed())
    } else {
      p.fill(255);
      // console.log(p.mouseIsPressed())
      console.log(p.mouseY)
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
    // p.triangle(p.mouseX, p.mouseY, p.mouseX+300, p.mouseY, p.mouseX+300/2, p.mouseY+300*1.7/2)
    normtr(p.mouseX, p.mouseY, 300, -1);
  }
}

const app = new p5(sketch, document.body)