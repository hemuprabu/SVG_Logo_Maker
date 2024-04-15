
// Shape class (Optional)
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Abstract method to be implemented by child classes
    }
}

// Circle class
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        const height = (Math.sqrt(3) / 2) * this.sideLength;
        return `<polygon points="150,${150 - height / 2} ${150 - this.sideLength / 2},${150 + height / 2} ${150 + this.sideLength / 2},${150 + height / 2}" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="${150 - this.sideLength / 2}" y="${150 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = {Circle,Square,Triangle};