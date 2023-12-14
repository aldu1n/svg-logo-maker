// Imported object constructors from shapes.js file.
const { Circle, Triangle, Square } = require('./shapes.js');


// A test that checks if the SVG markup renders user input correctly.
describe('Circle', () => {
    describe('Input', () => {
        it('Should take user input and insert it into SVG markup', () => {
            const text = 'SVG';
            const textColor = 'White';
            const shapeColor = 'Black';
        const testCircle = new Circle(text, textColor, shapeColor);

        expect(testCircle.generateSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill='Black' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='White'>SVG</text>
      
      </svg>`);
      });
    });
  });


// A test that checks if the SVG markup renders user input correctly.
describe('Triangle', () => {
    describe('Input', () => {
        it('Should take user input and insert it into SVG markup', () => {
            const text = 'SVG';
            const textColor = 'White';
            const shapeColor = 'Black';
        const testTriangle = new Triangle(text, textColor, shapeColor);

        expect(testTriangle.generateSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,10 10,190 290,190" fill='Black' />
      
        <text x="150" y="150" font-size="55" text-anchor="middle" fill='White'>SVG</text>
      
      </svg>`);
      });
    });
  });


// A test that checks if the SVG markup renders user input correctly.
describe('Square', () => {
    describe('Input', () => {
        it('Should take user input and insert it into SVG markup', () => {
            const text = 'SVG';
            const textColor = 'White';
            const shapeColor = 'Black';
        const testSquare = new Square(text, textColor, shapeColor);

        expect(testSquare.generateSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="200" fill='Black' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='White'>SVG</text>
      
      </svg>`);
      });
    });
  });