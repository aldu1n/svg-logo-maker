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

    
function Triangle (text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.generateSVG = function () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50 15, 100 100, 0 100" fill='${shapeColor}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${textColor}'>${text}</text>
      
      </svg>`
        }
      };    


function Square (text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.generateSVG = function () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="100" height="100" fill='${shapeColor}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${textColor}'>${text}</text>
      
      </svg>`
          }
        };



  module.exports = { Circle, Triangle, Square };

  