define(
	'main',
	['model', 'view', 'controller'],
	
	function(model, view, controller){
		return{
			mainn: function(model, view, controller){
				var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
				var modell = model.Model(firstToDoList);
				var vieww = view.View(modell);
				var controllerr  = controller.Controller(modell, vieww);
			}
		};
			
	}
	
);