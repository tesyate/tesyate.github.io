define(
	'model',
	[],
	function(){
		return{
			Model: function (data){
						var self = this;
				
						self.data = data;
						
						self.addItem = function(item){
							if (item.length === 0){
								return;
							}
							
							self.data.push(item);
							
							return self.data;
						};
						
						self.removeItem = function(item){
							var index = self.data.indexOf(item);
							
							if (index === -1){
								return;
							}
							
							self.data.splice(index, 1);
							
							return self.data;
						}; 
						
						self.editItem = function(item){
							var index = self.data.indexOf(item);
							
							if (index === -1){
								return;
							}
							
							self.data[index] = prompt('edit', self.data[index]);
							
							return self.data;
						}; 
					}
		}				
	}
);