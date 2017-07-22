define(
	'controller',
	['model', 'view'],
	function (model, view){
		return{
			Controller: function (modell, vieww){
							var self = this;
					
							view.elements.addBtn.on('click', addItem);
							view.elements.listContainer.on('click', '.item-delete', removeItem);
							view.elements.listContainer.on('click', '.item-edit', editItem);
							function addItem(){
								var newItem = view.elements.input.val();
								model.addItem(newItem);
								view.renderList(model.data);
								view.elements.input.val('');
							};
							
							function removeItem(){
								var item = $(this).attr('data-value');
								
								model.removeItem(item);
								view.renderList(model.data);
							}
							
							function editItem(){
								var item = $(this).attr('data-value');
								
								model.editItem(item);
								view.renderList(model.data);
							}
						}	
		}
		
	}
);