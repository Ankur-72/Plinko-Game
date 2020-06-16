class Particle {
    constructor(x, y, statiscity) {

        var options = {
            restituiton: 0.4,
            isStatic: statiscity
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.radius = 10;

        World.add(world, this.body);

        this.color  = ['#FF6633','#CC0066','#993399','#336699','#FF00FF','#FFCC00','#FF6600','#9BC53D','#FF0000','#330000']
        this.Randomcolor = random(this.color);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body. angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.Randomcolor);
        circle(0, 0, 20);     
        pop();
    }
}

