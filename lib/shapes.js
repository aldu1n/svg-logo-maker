// Object constructor for circle.
function Circle (text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.generateSVG = function () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill='${shapeColor}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${textColor}'>${text}</text>
      
      </svg>`
      }
    };

// Object constructor for triangle.   
function Triangle (text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.generateSVG = function () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,10 10,190 290,190" fill='${shapeColor}' />
      
        <text x="150" y="150" font-size="55" text-anchor="middle" fill='${textColor}'>${text}</text>
      
      </svg>`
        }
      };    

// Object constructor for square.
function Square (text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.generateSVG = function () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="200" fill='${shapeColor}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${textColor}'>${text}</text>
      
      </svg>`
          }
        };


// Exporting shape constructors.
  module.exports = { Circle, Triangle, Square };

  