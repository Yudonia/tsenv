import p5 from "p5";

document.body.style.margin="0";

export const sketch = (p)=>{

p.setup=()=> {
  
   p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

}

p.draw=()=>{
  if (p.mouseIsPressed){
    p.fill(0);
    // console.log(p.mouseIsPressed())
  }else{
    p.fill(255);
    // console.log(p.mouseIsPressed())
  }
  p.ellipse(p.mouseX,p.mouseY,80,80);
}
}

const app= new p5(sketch,document.body)