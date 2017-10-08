'use strict;'
$(function(){
	$('#request').keypress(function(e) {
	    if(e.which == 13) {
	        Search();
	    }
	});
	$('.btn').on('click', function() {Search();});
	function Search(){
			$('.example').remove();
			var API_KEY = '5791277-28b7852e9013d3c3d2a7a9048';
			var quest = $('#request').val();
			var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(quest);
			$.getJSON(URL, function(data){
			    if (parseInt(data.totalHits) > 0){
					
			        $.each(data.hits, function(i, hit){
			        	var b = hit.previewURL;
						var a = document.createElement('img');
						document.body.appendChild(a);
						a.classList.add('example');
						a.style.marginLeft = '20px';
						a.style.marginTop = '20px';
						a.src = b;
			         });
			        
			        
				}
			    else{
			        var a = document.createElement('h1');
					document.body.appendChild(a);
					a.classList.add('example');
					a.innerHTML = 'Картинок за даним запитом не знайдено';
				}
			});
		};
});