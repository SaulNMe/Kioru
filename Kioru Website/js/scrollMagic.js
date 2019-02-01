$(function() {
	var controller = new ScrollMagic.Controller();

	let imagesIphoneCoteboard = [];
	let imagesIphoneSaeko = [];
	let macBookPro = [];
	let imagesMac = [];
	let imagesMexico = [];
	let imagesAustralia = [];
	let body = document.getElementById("body");

	(function() {
		window.scrollTo(0, 0);
		addImages(imagesIphoneCoteboard, 47, "images/movile2/iphone_coteboard");
		addImages(imagesIphoneSaeko, 47, "images/movile/iphone_saeko");
		addImages(imagesMac, 47, "images/saeko-imac/mac_saeko");
		addImages(macBookPro, 99, "images/mac-book-pro/mac_opening0");
		addImages(imagesMexico, 59, "images/mexico/mapas")
		addImages(imagesAustralia, 59, "images/australia/mapas")
	})(window);

	function addImages(yourVar, imagesNumber, path) {
		for (var i = 0; i <= imagesNumber; i++) {
			let urlImage = ""
			if (i <= 9) {
				urlImage = path + "0" + i + ".png"
			}

			if (i >= 10 && i < 100) {
				urlImage = path + i + ".png"
			}
			if (i >= 100) {
				urlImage = path + i + ".png"

			}
			yourVar.push(urlImage);
		}
	}
	var obj = {
		curImg: 0
	}

	var tween = new TweenMax.to(obj, 0.5, {
		curImg: imagesIphoneSaeko.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#saekoImg").attr("src", imagesIphoneSaeko[obj.curImg]);
		}
	});

	var tween2 = new TweenMax.to(obj, 0.5, {
		curImg: imagesIphoneCoteboard.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#iphoneCote").attr("src", imagesIphoneCoteboard[obj.curImg]);
		}
	});

	var tween3 = new TweenMax.to(obj, 0.5, {
		curImg: imagesMac.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#iMac").attr("src", imagesMac[obj.curImg]);
		}
	});
	var tween4 = new TweenMax.to(obj, 0.5, {
		curImg: imagesMac.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#iMac2").attr("src", imagesMac[obj.curImg]);
		}
	});

	var tween5 = new TweenMax.to(obj, 0.5, {
		curImg: imagesIphoneSaeko.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#iphoneSaeko").attr("src", imagesIphoneSaeko[obj.curImg]);
		}
	});
	var tween6 = new TweenMax.to(obj, 1, {
		curImg: macBookPro.length - 1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function() {
			$("#macBookPro").attr("src", macBookPro[obj.curImg]);
		}
	});

	let movile1Animation = new ScrollMagic.Scene({
			triggerElement: window.innerWidth > 991 ? "#trigger1" : "#trigger1-mobile",
			triggerHook: 0.3,
			duration: window.innerWidth > 991 ? 80 : 100
		})
		.setTween(tween)
		.addTo(controller);

	let movile2Animation = new ScrollMagic.Scene({
			triggerElement: window.innerWidth > 991 ? "#trigger2" : "#trigger2-mobile",
			triggerHook: 0.3,
			offset: -20,
			duration: window.innerWidth > 991 ? 80 : 100
		})
		.setTween(tween2)
		.addTo(controller);

	let macAnimation = new ScrollMagic.Scene({
			triggerElement: window.innerWidth > 991 ? "#trigger3" : "#trigger3-mobile",
			triggerHook: 0.3,
			offset: -50,
			duration: window.innerWidth > 991 ? 80 : 100
		})
		.setTween(tween3)
		.addTo(controller);

	let mac2Animation = new ScrollMagic.Scene({
			triggerElement: window.innerWidth > 991 ? "#trigger4" : "#trigger4-mobile",
			triggerHook: 0.3,
			offset: -55,
			duration: window.innerWidth > 991 ? 80 : 100
		})
		.setTween(tween4)
		.addTo(controller);

	let saeko2Animation = new ScrollMagic.Scene({
			triggerElement: window.innerWidth > 991 ? "#trigger5" : "#trigger5-mobile",
			triggerHook: 0.3,
			offset: -70,
			duration: window.innerWidth > 991 ? 50 : 100
		})
		.setTween(tween5)
		.addTo(controller);

	let macBookProAnimation = new ScrollMagic.Scene({
			triggerElement: "#macBookPro",
			triggerHook: 0.35,
			duration: 168
		})
		.setTween(tween6)
		.addTo(controller);


	let tweenClass1 = new TweenMax.to("#device1", 1, { className: "+=animation-device1" });
	let tweenClass2 = new TweenMax.to("#device2", 1, { className: "+=animation-device2" });
	let tweenClass3 = new TweenMax.to("#device3", 1, { className: "+=animation-device3" });
	let tweenClass4 = new TweenMax.to("#device4", 1, {opacity: 1, right: "183px" });
	let tweenClass5 = new TweenMax.to("#device5", 1, {opacity: 1, left: "183px" });

	let deviceAnimation1 = new ScrollMagic.Scene({
			triggerElement: "#trigger6",
			triggerHook: 0.3,
			duration: 100
		})
		.setTween(tweenClass1)
		.addTo(controller);

	let deviceAnimation2 = new ScrollMagic.Scene({
			triggerElement: "#trigger7",
			triggerHook: 0.3,
			duration: 150
		})
		.setTween(tweenClass2)
		.addTo(controller);

	let deviceAnimation3 = new ScrollMagic.Scene({
			triggerElement: "#trigger8",
			triggerHook: 0.3,
			duration: 100
		})
		.setTween(tweenClass3)
		.addTo(controller);

	let deviceAnimation4 = new ScrollMagic.Scene({
			triggerElement: "#trigger9",
			triggerHook: 0.5,
			duration: 250
		})
		.setTween(tweenClass4)
		.addTo(controller);

	let deviceAnimation5 = new ScrollMagic.Scene({
			triggerElement: "#trigger9",
			triggerHook: 0.5,
			duration: 250
		})
		.setTween(tweenClass5)
		.addTo(controller);



	if (document.getElementById('html-portfolios')) {
		var tweenMexico = new TweenMax.to(obj, 1.5, {
			curImg: imagesMexico.length - 1,
			roundProps: "curImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function() {
				$("#mexicoImg").attr("src", imagesMexico[obj.curImg]);
			},
			onComplete: () => {
				let text500 = document.getElementById("text-500");
				text500.classList.add("pulse-text");
			},
			onReverseComplete: () =>{
				let text500 = document.getElementById("text-500");
				text500.classList.remove("pulse-text");
			}
		})
		var tweenAustralia = new TweenMax.to(obj, 1.5, {
			curImg: imagesAustralia.length - 1,
			roundProps: "curImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function() {
				$("#australiaImg").attr("src", imagesAustralia[obj.curImg]);
			}
		})
		/*================================= CHANGING SCENE ========================================*/
		let tween8 = new TweenMax.to("#scroll-bg", 1, { opacity: 1 })
		let tween9 = new TweenMax.to(".bg2", 1.3, { opacity: 1 })
		let tween10 = new TweenMax.to(".bg3", 1.5, { opacity: 1 })
		let tween11 = new TweenMax.to(".bg4", 1.5, { opacity: 1 })

		let bgAnimation1 = new ScrollMagic.Scene({
			triggerElement: ".scrolldown",
			triggerHook: 0.6,
			offset: 300
		})
		.setTween(tween8)
		.addTo(controller);

		let bgAnimation2 = new ScrollMagic.Scene({
			triggerElement: "#section-horizontal",
			triggerHook: 0.2,
			offset: 900
		})
		.setTween(tween9)
		.addTo(controller);

		let bgAnimation3 = new ScrollMagic.Scene({
			triggerElement: "#section-horizontal2",
			triggerHook: 0.3,
			offset: -100
		})
		.setTween(tween10)
		.addTo(controller);
		let bgAnimation4 = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.3,
			offset: 500
		})
		.setTween(tween11)
		.addTo(controller)
		/*================================= CHANGING SCENE ========================================*/
		var macBookProScene = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.6,
				offset: -80,
			})
			.setTween(tween6)
			.addTo(controller);

		let mexicoImgScene = new ScrollMagic.Scene({
				triggerElement: "#trigger-mexico",
				triggerHook: 0.6,
				offset: 400
			})
			.setTween(tweenMexico)
			.addTo(controller)

		let australiaImgScene = new ScrollMagic.Scene({
				triggerElement: "#trigger-mexico",
				triggerHook: 0.1,
				offset: -100
			})
			.setTween(tweenAustralia)
			.addTo(controller);

		function pathPrepare($el) {
			var lineLength = $el[0].getTotalLength();
			$el.css("stroke-dasharray", lineLength);
			$el.css("stroke-dashoffset", lineLength);
		}

		var $s = $("path#s");
		var $aeko = $("path#aeko");
		var $dot1 = $("path#dot1");
		var $dot1_1 = $("path#dot1_1");
		var $dot2_2 = $("path#dot2_2");
		var $dot3_3 = $("path#dot3_3");
		var $dot2 = $("path#dot2");
		var $dot3 = $("path#dot3");
		// prepare SVG
		pathPrepare($s);
		pathPrepare($aeko);
		pathPrepare($dot1);
		pathPrepare($dot1_1);
		pathPrepare($dot2_2);
		pathPrepare($dot3_3);
		pathPrepare($dot2);
		pathPrepare($dot3);

		var tween7 = new TimelineMax()
			.add(TweenMax.to($s, 0.8, {
				stroke: "#fff",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			}))
			.add(TweenMax.to($aeko, 2, {
				stroke: "#fff",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot1, 0.2, {
				stroke: "#BF209F",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot1_1, 0.4, {
				stroke: "#BF209F",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot2, 0.2, {
				stroke: "#2D9CDB",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot2_2, 0.4, {
				stroke: "#2D9CDB",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot3, 0.2, {
				stroke: "#50C53A",
				strokeDashoffset: 0,
				ease: Linear.easeNone
			})) // draw word for 0.1
			.add(TweenMax.to($dot3_3, 0.4, {
				stroke: "#50C53A",
				strokeDashoffset: 0,
				ease: Linear.easeNone,
				onComplete: function() {
					new ScrollMagic.Scene({
							triggerElement: "#aeko"
						})
						.setClassToggle("#s, #aeko", "filling_saeko_main")
						.addTo(controller);

					new ScrollMagic.Scene({
							triggerElement: "#aeko"
						})
						.setClassToggle("#dot1, #dot1_1", "fill_purple")
						.addTo(controller);

					new ScrollMagic.Scene({
							triggerElement: "#aeko"
						})
						.setClassToggle("#dot2, #dot2_2", "fill_blue")
						.addTo(controller);

					new ScrollMagic.Scene({
							triggerElement: "#aeko"
						})
						.setClassToggle("#dot3, #dot3_3", "fill_green")
						.addTo(controller);
					let mainSaekoLogo = document.getElementById("saeko_svg");
					var signArrw = document.getElementById("sign-arrow");
					if (mainSaekoLogo.style.transform == "scale(1.1)") {
						mainSaekoLogo.classList.add("path-animation-largest");
					} else if (mainSaekoLogo.style.transform == "scale(0.9)") {
						mainSaekoLogo.classList.add("path-animation-desktop");
					} else if (mainSaekoLogo.style.transform == "scale(0.7)") {
						mainSaekoLogo.classList.add("path-animation-tablet");
					} else {
						mainSaekoLogo.classList.add("path-animation-mobile");
					}
					body.classList.remove("hidden");
					setTimeout(() => {
						signArrw.classList.remove("no-display");
						signArrw.classList.add("displayed");
					}, 800)
				},
				onReverseComplete: () => {
					if (document.getElementById("s")) {
						let s = document.getElementById("s");
						if (s.classList.contains('filling_saeko_main')) {
							removeClassList(["s", "aeko", "dot1", "dot1_1", "dot2", "dot2_2", "dot3", "dot3_3", "saeko_svg"],
							["filling_saeko_main", "fill_blue", "fill_purple", "fill_green", "path-animation-largest", "path-animation-desktop", "path-animation-tablet", "path-animation-mobile"], true)
						}
						function removeClassList(elements, classes, remove) {
							if (remove) {
								$.each(elements, (i, elem) => {
									let idElement = document.getElementById(elem);
									$.each(classes, (j, className) => {
										idElement.classList.remove(className);
									})
								})
							}
						}
					}

				}
			}))
		// build scene
		var sceneDrawing = new ScrollMagic.Scene({
				triggerElement: "#trigger5",
				triggerHook: 0.1,
				offset: -100
			})
			.setTween(tween7)
			/*.on("start", () => {
				body.classList.add("hidden");
			})*/
			.addTo(controller);

		let horizontalSlide = new TimelineMax().to(".ul", 1, { left: "-100%" });
		let horizontalSlide2 = new TimelineMax().to(".ul-large", 1, { left: "-400%" })

		let squareBoxTween = new TimelineMax().to(".square-box", 1, {left: "10%"})
		let highestTextTween = new TimelineMax().to(".highest-text", 1, {left: "25%"})
		let containerClientTween = new TimelineMax().to(".container-clients", 1, {left: "2%"})

		new ScrollMagic.Scene({
			triggerElement: "#section-horizontal",
			triggerHook: "onLeave",
			duration: "200%"
		})
		.setPin("#section-horizontal")
		.setTween(horizontalSlide)
		.addTo(controller);
		new ScrollMagic.Scene({
			triggerElement: "#section-horizontal2",
			triggerHook: "onLeave",
			duration: "500%"
		})
		.setPin("#section-horizontal2")
		.setTween(horizontalSlide2)
		.addTo(controller);

		let highestTextAnimation = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.5,
			duration: 2000,
			offset: 700
		})
		.setTween(highestTextTween)
		.addTo(controller);

		let squareBoxAnimation = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.5,
			duration: 1300,
			offset: 700
		})
		.setTween(squareBoxTween)
		.addTo(controller);

		let containerClientsAnimation = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.5,
			duration: 1300,
			offset: 700
		})
		.setTween(containerClientTween)
		.addTo(controller);

		let scrollLineTween1 = new TimelineMax().to("#scroll-line", 1, {
			height: "200px",
			onReverseComplete: () => {
				let signArrw = document.getElementById("sign-arrow");
				signArrw.classList.remove("no-display")
				signArrw.classList.add("displayed")
			},
			onStart: () => {
				let signArrw = document.getElementById("sign-arrow");
				signArrw.classList.remove("displayed")
				signArrw.classList.add("no-display")
			}
		})
		let scrollLineTween2 = new TimelineMax().to("#scroll-line2", 1, {
			width: "480px"
		})
		let scrollLineTween3 = new TimelineMax().to("#scroll-line3", 1, {
			height: "60px"
		})
		let scrollLineTween4 = new TimelineMax().to("#scroll-line4", 1, {
			height: "300px"
		})
		let scrollLineTween5 = new TimelineMax().to("#scroll-line5", 1, {
			width: "550px"
		})

		let scrollLineAnimation1 = new ScrollMagic.Scene({
				triggerElement: "#aeko",
				triggerHook: window.innerWidth > 1200 ? 0.6 : 0.4,
				duration: 300,
				offset: window.innerWidth > 1200 ? 200 : 100
			})
			.setTween(scrollLineTween1)
			.addTo(controller)

		let scrollLineAnimation2 = new ScrollMagic.Scene({
				triggerElement: "#scroll-line",
				triggerHook: 0.4,
				duration: 500,
				offset: 500
			})
			.setTween(scrollLineTween2)
			.addTo(controller)

		let scrollLineAnimation3 = new ScrollMagic.Scene({
				triggerElement: "#scroll-line3",
				triggerHook: 0.4,
				duration: 50,
				offset: 0
			})
			.setTween(scrollLineTween3)
			.addTo(controller)

		let scrollLineAnimation4 = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.4,
			duration: 400,
			offset: 0
		})
		.setPin("#scroll-line")
		.setTween(scrollLineTween4)
		.addTo(controller)

		let scrollLineAnimation5 = new ScrollMagic.Scene({
			triggerElement: "#scroll-line4",
			triggerHook: 0.3,
			duration: 400,
			offset: 380
		})
		.setTween(scrollLineTween5)
		.addTo(controller)
	}

})