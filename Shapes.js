class Shape{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
        log (){
            console.log(
                `Circumference : ${this.getCircumference()} ,
                Area : ${this.getArea()},
                Type: ${this.constructor.name}`
            );     
        }
        getCircumference(){}
        getArea(){}
}
        
class Rectangle extends Shape{
    constructor(x, y, width, height){
        super(x,y);
        this.width = width;
        this.height = height;
    }
        getCircumference(){
            return (this.width + this.height) * 2;
        }
        getArea(){
            return this.width * this.height;
        }
}


class Square extends Rectangle{
    constructor(x, y, length){
        super(x, y);
        this.length = length;
    }
        getCircumference (){
            return (this.length + this.length) * 2;
        }
        getArea(){
            return this.length * this.length;
        }    
}

class Oval extends Shape{ 
    constructor(x, y, a, b){
        const PI = 3.14;
        super(x, y);
        this.a = a;
        this.b = b;
        this.PI = PI;
    }
        getCircumference(){
            return (this.a + this.b) * this.PI;
        }
        getArea(){
            return this.a * this.b * this.PI;
        } 
}

class Circle extends Oval{
    constructor(x, y, a, b, r){
        super(x, y, a, b);
        this.r = r;
    }
        getCircumference(){
            return (this.r + this.r) * this.PI;
        }
        getArea (){
            return this.r * this.r * this.PI;
        } 
}

class DrawArea{
    constructor(...Shapes){
        this.Shapes = Shapes;
    }
    log(){
        for (const shape of this.Shapes){
            shape.log()
        }
    }
    add(shape){
        this.Shapes.push(shape);
    }
}

let rect = new Rectangle(0,0,10,5);
let square = new Square (0,0,5);
let oval = new Oval(0,0,10,5);
let circle = new Circle(0,0,10,5,5)
let draw = new DrawArea(rect,square,oval,circle);
draw.add(rect,square,oval,circle);
draw.log();


