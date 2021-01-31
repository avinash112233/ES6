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
    let square = new Shape("square",4,5);
    var squareperim = square.calcPerimeter();
     console.log(squareperim);
class Square extends Shape{
    constructor(square,sideLength){
        super(square);
        this.length=sideLength;
    }
    calcArea(){
        return this.length*this.length;
    }
}
let squa=new Square(square,5);
var squarearea=squa.calcArea();
 module.exports = {
      parentClass: Shape,
      childClass: Square, // The class name
      instance: squa, // The instance name
      SquarePerimeter: squareperim,//the variable with perimeter of square,
      SquareArea: squarearea// the variable with area of square
  }
