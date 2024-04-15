const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shape'); // Assuming you have defined shape classes in a separate file

// Questions for prompting user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo. (must not be more than 3 characters.):',
    },
    {
        type: 'list',
        name: 'textcolor',
        message: 'Select a text color:',
        choices: ['red', 'blue', 'green'],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'list',
        name: 'shapecolor',
        message: 'Select a shape color:',
        choices: ['red', 'blue', 'green'],
    },
];
// Function to generate SVG content based on user input
function generateSVGContent(text, textcolor, shape, shapecolor) {
    let shapeSVG;
    let shapText;
    switch (shape) {
        case 'Circle':
            shapeSVG = new Circle(80, shapecolor); // Assuming a default radius of 50 for the circle
            shapText =  `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
            break;
        case 'Triangle':
            shapeSVG = new Triangle(160, shapecolor); // Assuming a default side length of 50 for the triangle
            shapText =  `<text x="150" y="160" font-size="45" text-anchor="middle" fill="${textcolor}">${text}</text>`
            break;
        case 'Square':
            shapeSVG = new Square(150, shapecolor); // Assuming a default side length of 50 for the square
            shapText =  `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
            break;
        default:
            console.log('Invalid shape selected.');
            return null;
    }

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG.render()}
        ${shapText}
    </svg>
    `;
    //<text x="50%" y="100%" dominant-baseline="middle" text-anchor="middle" fill="${textcolor}">${text}</text>
}





const fs = require('fs');

// Function to write SVG content to a file
function writeSVGToFile(svgContent) {
    fs.writeFile('./assets/logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('SVG file saved as logo.svg');
        }
    });
}

// Update the processUserInput function to use the generateSVGContent function and writeSVGToFile function
async function processUserInput() {
    try {
        const answers = await inquirer.prompt(questions);

        const svgContent = generateSVGContent(answers.text, answers.textcolor, answers.shape, answers.shapecolor);
        if (svgContent) {
            writeSVGToFile(svgContent);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

processUserInput() ;

module.exports =  generateSVGContent;