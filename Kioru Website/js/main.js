$(function () {
	/*Auto start function*/
	(function( window) {
		resize();
		onScroll();
	})(window);
	
	$(window).scroll(function(){
		onScroll()
		
	})
	function onScroll(){
		if (document.getElementById("our-company")){
			var ourCompany = document.getElementById("our-company");
		}
		if($(window).scrollTop()>window.innerHeight || document.getElementById("html-about-us") || 
			document.getElementById("html-career") || document.getElementById("html-career-card") ||
			document.getElementById("html-career-sent")){
			if(ourCompany) {ourCompany.style.marginTop = 104 + "px";}
			$('nav').addClass('sticky-nav');
		} else {
			ourCompany.style.marginTop = 40 + "px";
			$('nav').removeClass('sticky-nav')
		}
	}

	/*Function for start resizing function*/
	$(window).resize(function(){
	  	resize();
	});

	/*Function for adding and deleting clases if an element in HTMl*/
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
	/*Resize function when window is gotten bigger or smaller*/
	function resize(){
		let servicesContainer = document.getElementById("services-container");
		let servicesContainer2 = document.getElementById("services-container2");
		let removeWidth = document.getElementById("remove-width");
		let removeWidth2 = document.getElementById("remove-width2");
		var removeItems = [];
		var addItems = [];
		let aboutUs = document.getElementById("about-us");
		let removePadding = document.getElementById("remove-padding");
		let careerCard = document.getElementById("career-card");
		if(window.innerWidth <= 991){
			if (servicesContainer && servicesContainer2 && removeWidth && removeWidth2){
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
			}
			handleClass("footer-coal", ["coal-black-bg"], false);
			handleClass("footer-coal", ["valign-wrapper"], false);
			if(aboutUs){
				handleClass("about-us", ["extra-horizontal-padding"], false);
				handleClass("about-us", ["base-horizontal-padding"], true)
			}
			if(removePadding){
				handleClass("remove-padding", ["extra-horizontal-padding"], false);
			}
			if(document.getElementById("learn-about")){
				document.getElementById("learn-about").innerHTML = "About Us";
			}
			if(document.getElementById("title-form")){
				document.getElementById("title-form").innerHTML = "Fill to apply"
			}
			if (careerCard){
				handleClass("career-card", ["extra-padding"], false);
				handleClass("career-card", ["base-horizontal-padding"], true);
			}
		} else {
			handleClass("footer-coal", ["coal-black-bg"], true);
			handleClass("footer-coal", ["valign-wrapper"], true);
			if(document.getElementById("learn-about")){
				document.getElementById("learn-about").text =  "Learn more about us";
			}
			if(document.getElementById("title-form")){
				document.getElementById("title-form").innerHTML = "llena la tabla para Aplicar para el trabajo";
			}
			if(servicesContainer && servicesContainer2 && removeWidth && removeWidth2){
				servicesContainer.classList.add("middle-container");
				servicesContainer2.classList.add("middle-container");
				removeWidth.classList.remove("responsive-button-padding");
				removeWidth.classList.add("full-width");
				removeWidth2.classList.remove("responsive-button-padding");
				removeWidth2.classList.add("full-width");
			}
			if(aboutUs){
				aboutUs.classList.remove("big-horizontal-padding");
				aboutUs.classList.add("extra-horizontal-padding");
			}
			if(removePadding){
				removePadding.classList.add("extra-horizontal-padding");
			}
			if(careerCard){
				careerCard.classList.add("extra-padding");
			}
		}
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