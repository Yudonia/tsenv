export const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }
  p.draw = () => {
    p.background('#0f2350');
    p.noStroke();
    p.fill(255);
    p.ellipse(p.windowWidth/2, p.windowHeight/2, 50, 50);
  }
};

