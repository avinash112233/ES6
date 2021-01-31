
class Shape{
    constructor(name,sides,sideLength)
    {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
        calcPerimeter() {
            return this.sides*this.sideLength;
        }
        
    }
    const Square = new Shape("square",4,5);
    const Triangle = new Shape("triangle",3,3);
    let triperim = Triangle.calcPerimeter();
    let squareperim = Square.calcPerimeter(); 
    module.exports ={
        class:Shape,
        Square:Square,
        Triangle:Triangle,
        SquarePerimeter:squareperim,
        TrianglePerimeter:triperim
    }

