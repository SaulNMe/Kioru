$(function () {
	/*Auto start function*/
	(function( window) {
		resize();
		onScroll();
		if(document.getElementById("html-portfolios")){
			let textChange = document.getElementById("service-description")
			hoverImage('service1', ["images/saeko-services/saeko-admin-unfill.png", 
				"images/saeko-services/saeko-admin.png"], textChange, 
				"Saeko para administradores de escuelas, ahorra tiempo, evita errores y mejora la eficiencia.")
			hoverImage('service2', ["images/saeko-services/saeko-prof-unfill.png", 
				"images/saeko-services/saeko-prof.png"], textChange, 
				"Gestión de actividades de clase, organización y control del progreso de los estudiantes, diseño y publicación evaluaciones.")
			hoverImage('service3', ["images/saeko-services/saeko-stu-unfill.png", 
				"images/saeko-services/saeko-stu.png"], textChange, 
				"Visualización de horarios, información de actividades diarias, recepción de calificaciones, comunicación con docentes.")
			hoverImage('service4', ["images/saeko-services/saeko-fam-unfill.png", 
				"images/saeko-services/saeko-fam.png"], textChange, 
				"Conoce calificaciones, pagos, horarios y actividades, enterate de todo lo que pasa en tu escuela")

			}
	})(window);
	
	$(window).scroll(function(){
		onScroll()
		
	})
	function hoverImage(element, path, label, text) {
		let elementId = document.getElementById(element);
		
		elementId.addEventListener("mouseover", function(){
			elementId.setAttribute('src', path[0]);
			label.innerHTML = text
		})
		elementId.addEventListener("mouseout", function(){
			elementId.setAttribute('src', path[1]);
		})

	}
	function onScroll(){
		if (document.getElementById("our-company")){
			var ourCompany = document.getElementById("our-company");
		}

		if($(window).scrollTop()>window.innerHeight || document.getElementById("html-about-us") || 
			document.getElementById("html-career") || document.getElementById("html-career-card") ||
			document.getElementById("html-career-sent") || document.getElementById("html-blog") ||
			document.getElementById("html-contact-us") || document.getElementById("html-contact-us-sent") ||
			document.getElementById("html-blog-new")){
			if(ourCompany){
				ourCompany.style.marginTop = 65 + "px";
			}
				$('nav').addClass('sticky-nav');
		} else {
			if(ourCompany){
				ourCompany.style.marginTop = 0 + "px";
			}
				$('nav').removeClass('sticky-nav')
		}
	}

	/*Function for start resizing function*/
	$(window).resize(function(){
	  	resize();
	});

	/*Function for adding and deleting clases if an element in HTMl*/
	let handleClassFunction;
	function handleClass(element, clases, add){
		var idElement = document.getElementById(element);
		$.each(clases, (i, val) => {
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
		let addColumn = document.getElementById("add-column");
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
			if(document.getElementById("footer")){
				handleClass("footer-coal", ["coal-black-bg"], false);
				handleClass("footer-coal", ["valign-wrapper"], false);
			}
			if(aboutUs){
				handleClass("about-us", ["extra-horizontal-padding"], false);
				handleClass("about-us", ["base-horizontal-padding"], true)
			}
			if(removePadding){
				handleClass("remove-padding", ["extra-horizontal-padding"], false);
				handleClass("remove-padding", ["great-horizontal-padding"], false);
				handleClass("add-column", ["column"], true);
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
			if(document.getElementById("footer")){
				handleClass("footer-coal", ["coal-black-bg"], true);
				handleClass("footer-coal", ["valign-wrapper"], true);
			}
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
				removePadding.classList.add("great-horizontal-padding");
				removePadding.classList.add("extra-horizontal-padding");
			}
			if(addColumn){
				addColumn.classList.remove("column")
			}
			if(careerCard){
				careerCard.classList.add("extra-padding");
			}
		}

		if(document.getElementById("html-portfolios")){
			svgImageSaeko = document.getElementById("saeko_svg")
			if (window.innerWidth > 1200) {
				svgImageSaeko.setAttribute("style", "transform: scale(1.1)")
			} else if(window.innerWidth >= 992 && window.innerWidth <= 1200) {
				svgImageSaeko.setAttribute("style", "transform: scale(0.9)")
			} else if(window.innerWidth >= 601 && window.innerWidth <= 991) {
				svgImageSaeko.setAttribute("style", "transform: scale(0.7)")
			} else {
				svgImageSaeko.setAttribute("style", "transform: scale(0.5)")
			}
		}
	}
	if(document.getElementById("navbar")){
		$('.sidenav').sidenav();
	}
	$("img.lazy").lazyload();
});