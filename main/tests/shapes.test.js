const {Shapes, Circle, Triangle, Square} = require('../lib/shapes.js')

test("Testing blue triangle.", function() {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
test("Testing blue circle.", function() {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
})
test("Testing green square.", function() {
  const shape = new Square();
  shape.setColor("green");
  expect(shape.render()).toEqual(`<rect x="50" y="20" width="150" fill="green" />`);
})
