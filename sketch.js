var hr,min,sec;
var hrAng,minAng,secAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}

function draw() {
  background(0);  
 hr=hour()
 min=minute()
 sec=second()

 hrAng = map(hr % 12,0,12,0,360)
 minAng=map(min,0,60,0,360)
 secAng=map(sec,0,60,0,360)

 translate(200,200)
 rotate(-90)

 push()
 rotate(secAng)
 stroke("red")
 strokeWeight(7)
 line(0,0,100,0)
 pop()

 push()
 rotate(minAng)
 stroke("green")
 strokeWeight(7)
 line(0,0,75,0)
 pop()

 push()
 rotate(hrAng)
 stroke("blue")
 strokeWeight(7)
 line(0,0,50,0)
 pop()

 point(0,0)

 //drawing the arcs
 strokeWeight(10);
 stroke("red")
 noFill()
 arc(0,0,300,300,0,secAng);
 stroke("green")
 noFill()
 arc(0,0,280,280,0,minAng);
 stroke("blue")
 noFill()
 arc(0,0,260,260,0,hrAng);
}