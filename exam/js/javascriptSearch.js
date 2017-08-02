'use strict;'
$(function(){
	Search();
	$('#request').keypress(function(e) {
	    if(e.which == 13) {
	        Search();
	    }
	});
	$('.btn').on('click', function() {Search();});
	function Search(){
			$('.desc').remove();
			$('.diss').remove();
			$('.example').remove();
			var j = 0;
			var API_KEY = '5791277-28b7852e9013d3c3d2a7a9048';
			var quest = $('#request').val();
			if (quest == ""){
				quest = 'hd';
			}
			var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(quest);
			$.getJSON(URL, function(data){
			    if (parseInt(data.totalHits) > 0){
					var unter = data.hits.slice(0, 7);
			        $.each(unter, function(i, hit){
			        	j++;
			        	var b = hit.webformatURL;
						var c = document.createElement('div');
						var d = document.createElement('div');
						var a = document.createElement('img');
						$('.grid').append(c);
						c.classList.add('desc' + j);
						c.classList.add('desc');
						$('.desc'+ j).append(d);
						$('.desc' + j).append(a);
						a.classList.add('example');
						d.classList.add('diss' + j);
						d.classList.add('diss');
						$('.diss' + j).text(hit.tags);
						a.classList.add('grid-item' + j);
						c.style.marginTop = '10px';
						d.style.marginTop = $('.desc').height() / 2 - 20 + "px";
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