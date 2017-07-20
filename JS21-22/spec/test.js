var misc = require('../js/app.js');
var sum;
	class Count{
		plus(a, b) {
			var sum=a;
            for(var i=1; i <= b-1; i++){
				sum=sum*a;
			};
			return sum;
        };
        minus(a, b) {
        	var sum=a;
            for(var i=1; i <= Math.abs(b)+1; i++){
				sum=sum/a;
			};
			return sum;
		};
		zero(a, b){
			var sum = 1;
		}
	};

	describe("misc", function() {
        it("contains spec with an expectation", function() {
            expect(true).toBe(true);
        });
    });

	  it("plus number", function() {
	  	var Test = new Count;
		expect(Test.plus(2, 2)).toBe(4);
	  });
	  it("minus number", function() {
	  	var Test = new Count;
	    expect(Test.minus(2, -2)).toBe(0.25);
	  });