var misc = require('../js/app.js');
describe("misc", function() {
  it("plus number", function() {
  	var a = misc(2, 2);
    expect(a).toBe(4);
  });
  it("minus number", function() {
    var a = misc(2, -2);
    expect(a).toBe(0.25);
  });
});