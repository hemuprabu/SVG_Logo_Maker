const generateSVGContent = require('./../index');
const { Circle, Triangle, Square } = require('./../lib/shape');

describe('Shape Classes', () => {
    //test circle
    test('Circle should render correctly', () => {
        const circle = new Circle(80, 'red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
    //test Triangle
    test('Triangle should render correctly', () => {
        const triangle = new Triangle(160, 'blue');
        expect(triangle.render()).toEqual('<polygon points="150,80.71796769724492 70,219.28203230275508 230,219.28203230275508" fill="blue" />');
    });
    //test Square
    test('Square should render correctly', () => {
        const square = new Square(150, 'green');
        expect(square.render()).toEqual('<rect x="75" y="75" width="150" height="150" fill="green" />');
    });
});

describe('SVG Generation', () => {
    test('SVG content should be generated correctly', () => {
        const svgContent = generateSVGContent('SVG','red', 'Circle', 'purple');
        expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="purple" />');
        expect(svgContent).toContain('<text x="150" y="115"');
    });
});
