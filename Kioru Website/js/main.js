$(function () {
	

	(function( window) {
		resize();
	})(window);

	
	$(window).resize(function(){
	  	resize();
	});

	function resize(){
		var landscape = document.getElementById('landscape') ? document.getElementById('landscape') : null;
		var navbar = document.getElementById('navbar');
		var services = document.getElementById('services');
		var ourCompany = document.getElementById('our-company');
		var experience = document.getElementById('experience');
		var steps = document.getElementById('steps');
		var callToAction = document.getElementById('call-to-action');
		var footer = document.getElementById('footer');
		console.log(window.innerWidth);
		if(window.innerWidth > 768 ){
			var w = window.innerWidth - 17 + 'px';
	  	} else {
	  		
			var w = window.innerWidth + 'px';
	  	}
		var h = window.innerHeight + 'px';
		landscape ? landscape.style.width = w : null;
		navbar.style.width = w;
		services ? services.style.width = w : null;
	 	ourCompany ? ourCompany.style.width = w : null;
		experience ? experience.style.width = w : null;	
		steps ? steps.style.width = w : null;
		callToAction ? callToAction.style.width = w : null;
		footer.style.width = w;
	}
	console.log("hol");
	 $('.sidenav').sidenav();
});