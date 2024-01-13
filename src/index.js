import * as p5 from "p5";
import "p5/lib/addons/p5.sound.js";
import Math from "math.js";
// import p5sound from "../node_modules/p5/lib/addons/p5.sound.js";
// import webpack from "webpack";
// plugins:[
// new webpack.ProvidePlugin({
//     p5: 'p5',

// })
// ]


let count = 0
document.body.style.margin = "0";
export const sketch = (p) => {

  function normal(x, y, r, ud) {
    p.triangle(x, y, x + r, y, x + r / 2, y + ud * r * 3 ** (0.5) / 2)
  }

  p.setup = () => {

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    // p.ellipse(100, 100, 100, 100);
    let x = 100;
    let y = 100;
    const osc = new p5.Oscillator('sawtooth');
    osc.start();
    osc.stop(0.05);
    // p.play(osc,10,5);
    // const osd = new p5.Oscillator('sine');
    // osd.start()
  }

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(255);
      // console.log(p.mouseIsPressed());
      if (count === 100) {
        p.clear();
        count = 0;

      } else {
        count += 1;
        console.log(count);
        // }
      }
      let xo=Math.random();
      let yo=Math.random();
      p.ellipse(p.windowWidth * xo, p.windowHeight * yo, 80, 80);
    const osc = new p5.Oscillator('sawtooth');
      osc.pan(xo*1.8-0.9);
      osc.freq(yo*2200+200);
      osc.start();
      osc.stop(0.05);
    } else {
      p.fill(255);
      // console.log(p.mouseIsPressed())
      console.log(Math.random())
    }
    // p.triangle(p.mouseX, p.mouseY, p.mouseX+300, p.mouseY, p.mouseX+300/2, p.mouseY+300*1.7/2)
    normal(p.mouseX, p.mouseY, 300, -1);
  }
}

const app = new p5(sketch, document.body);