$(function () {
	

	(function( window) {
		resize();
	})(window);

	
	$(window).resize(function(){
	  	resize();
	});
	function handleClass(element, clases, add){
		var idElement = document.getElementById(element);
		$.each(clases, function(i, val){
			if (add) {
				idElement.classList.add(val);
			}
			else {
				idElement.classList.remove(val);
			}
		})
	}
	/*function addItemsToVar(elements){
		$.each(elements, function(i, val){
			removeItems.add(val);
			console.log(removeItems);
		})
	}*/
	function resize(){
		let servicesContainer = document.getElementById("services-container");
		let servicesContainer2 = document.getElementById("services-container2");
		let removeWidth = document.getElementById("remove-width");
		let removeWidth2 = document.getElementById("remove-width2");
		var removeItems = [];
		var addItems = [];
		if(window.innerWidth <= 991){
			handleClass("services-container", ["no-margin", "center", "column"], true);
			handleClass("services-container", ["middle-container", "great-horizontal-margin"], false);
			handleClass("services-container2", ["no-margin", "center", "column"], true);
			handleClass("services-container2", ["middle-container", "great-horizontal-margin"], false);
			handleClass("services-container3", ["no-margin", "center", "column"], true);
			handleClass("services-container3", ["middle-container", "great-horizontal-margin"], false);
			handleClass("remove-width", ["full-width"], false);
			handleClass("remove-width", ["responsive-button-padding"], true);
			handleClass("remove-width2", ["full-width"], false);
			handleClass("remove-width2", ["responsive-button-padding"], true);
			handleClass("remove-width3", ["full-width"], false);
			handleClass("remove-width3", ["responsive-button-padding"], true);
			handleClass("footer-coal", ["coal-black-bg"], false);
			handleClass("footer-coal", ["valign-wrapper"], false);
			document.getElementById("learn-about").innerHTML = "About Us";
		} else {
			document.getElementById("learn-about").text = "Learn more about us";
			servicesContainer.classList.add("middle-container");
			servicesContainer2.classList.add("middle-container");
			removeWidth.classList.remove("responsive-button-padding");
			removeWidth.classList.add("full-width");
			removeWidth2.classList.remove("responsive-button-padding");
			removeWidth2.classList.add("full-width");
		}
		console.log(window.innerWidth);
		/*var landscape = document.getElementById('landscape') ? document.getElementById('landscape') : null;
		var navbar = document.getElementById('navbar');
		var services = document.getElementById('services');
		var ourCompany = document.getElementById('our-company');
		var experience = document.getElementById('experience');
		var steps = document.getElementById('steps');
		var callToAction = document.getElementById('call-to-action');
		var footer = document.getElementById('footer');
		console.log(window.innerWidth);
		console.log(window.innerHeight);
		if(window.innerWidth > 991 ){
			var w = window.innerWidth - 17 + 'px';
	  	} else {
	  		
			var w = window.innerWidth + 'px';
	  	}
		var h = window.innerHeight + 'px';
		landscape ? landscape.style.width = w : null;
		landscape ? landscape.style.height = h : null;
		navbar.style.width = w;
		services ? services.style.width = w : null;
	 	ourCompany ? ourCompany.style.width = w : null;
		experience ? experience.style.width = w : null;	
		steps ? steps.style.width = w : null;
		callToAction ? callToAction.style.width = w : null;
		footer.style.width = w;*/
	}
	 $('.sidenav').sidenav();
});