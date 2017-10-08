	var numeric = Number;
	var step = Number;
	numeric=prompt("Число, яке буде підноситись до степеню");
	step=prompt("Степінь?");
	var sum;
	function count (x, y){
		sum=x
		if(y<0)	
			for(var i=1; i <= Math.abs(y)+1; i++){
				sum=sum/x;
			}
		else if(y>0)
			for(var i=1; i <= y-1; i++){
				sum=sum*x;
			}
		else
			sum=1
		return sum;
	}
	
	count(numeric,step);
	alert(sum);
	console.log("Число " + numeric + " в степені " + step + " дорівнює: " + sum);
	module.exports.count=count;
