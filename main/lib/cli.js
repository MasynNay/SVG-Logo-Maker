const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Circle, Triangle, Square} = require('./shapes.js')
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument, generateSVG } = require('./document');

class CLI {
  constructor() {
    this.title = 'logo.svg';
    this.info = []
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'What would like you the text of the logo to be? (Maximum of 3 Characters)',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like your logo text to be? (Color Keyword or Hexadecimal)',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like your logo to be?',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like your shape to be? (Color Keyword or Hexadecimal)',
        }
      ])
      .then(({text, textColor, shape, shapeColor}) => {
        console.log(text, textColor, shape, shapeColor);
        let newShape = null;
        switch(shape){
          case "Square":
            newShape = new Square();
            break;
          case "Triangle":
            newShape = new Triangle();
            break;
          case "Circle":
            newShape = new Circle();
            break;
        }
    
        newShape.setColor(shapeColor);
        console.log(newShape.render());
        let svg = generateSVG(newShape.render(), text, textColor);
        console.log(svg)
        fs.writeFile("logo.svg", svg, (err) => {
          if (err)
            console.log(err);
          else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
          }
        });
      })
      .then(() => console.log('Created logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('An Error Has Occurred, Please Try Again');
      });
  }
}

module.exports = CLI;
