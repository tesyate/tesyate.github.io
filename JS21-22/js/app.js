	
	
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
	
	var Test = new Count;
	console.log("Число " + 2 + " в степені " + 4 + " дорівнює: " + Test.plus(2, 4));
	console.log("Число " + 2 + " в степені " + -2 + " дорівнює: " + Test.plus(2, -2));
		