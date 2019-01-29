$(function () {
	var controller = new ScrollMagic.Controller();

	let imagesIphoneCoteboard = [];
	let imagesIphoneSaeko = [];
	let imagesMac = [];
	let macBookPro = [];

	(function(){
		addImages(imagesIphoneCoteboard, 47, "images/movile2/iphone_coteboard");
		addImages(imagesIphoneSaeko, 47, "images/movile/iphone_saeko");
		addImages(imagesMac, 47, "images/saeko-imac/mac_saeko");
		addImages(macBookPro, 99, "images/mac-book-pro/mac_opening0");
	})(window);

	function addImages(yourVar, imagesNumber, path){
		for (var i = 0; i <= imagesNumber; i++) {
			let urlImage = ""
			if(i<=9){
				urlImage = path + "0" + i + ".png"
			}

			if (i>= 10 && i<100) {
				urlImage = path + i + ".png"
			}
			if (i>=100) {
				urlImage = path + i + ".png"
			
			}
				yourVar.push(urlImage);
		}
	}
	var obj = {curImg: 0}

	var tween = new TweenMax.to(obj, 0.5, {
			curImg: imagesIphoneSaeko.length-1,
			roundProps: "curImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
				$("#saekoImg").attr("src", imagesIphoneSaeko[obj.curImg]);
			}	
		});

	var tween2 = new TweenMax.to(obj, 0.5, {
		curImg: imagesIphoneCoteboard.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#iphoneCote").attr("src", imagesIphoneCoteboard[obj.curImg]);
		}	
	});

	var tween3 = new TweenMax.to(obj, 0.5, {
		curImg: imagesMac.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#iMac").attr("src", imagesMac[obj.curImg]);
		}	
	});
	var tween4 = new TweenMax.to(obj, 0.5, {
		curImg: imagesMac.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#iMac2").attr("src", imagesMac[obj.curImg]);
		}	
	});

	var tween5 = new TweenMax.to(obj, 0.5, {
		curImg: imagesIphoneSaeko.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#iphoneSaeko").attr("src", imagesIphoneSaeko[obj.curImg]);
		}	
	});
	var tween6 = new TweenMax.to(obj, 0.5, {
		curImg: macBookPro.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#macBookPro").attr("src", macBookPro[obj.curImg]);
		}	
	});

	let movile1Animation = new ScrollMagic.Scene({
		triggerElement: window.innerWidth > 991 ? "#trigger1" : "#trigger1-mobile",
		triggerHook: 0.3,
		duration:  window.innerWidth > 991 ? 80 : 100
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


	let tweenClass1 = new TweenMax.to("#device1", 1, {className: "+=animation-device1"});
	let tweenClass2 = new TweenMax.to("#device2", 1, {className: "+=animation-device2"});
	let tweenClass3 = new TweenMax.to("#device3", 1, {className: "+=animation-device3"});
	let tweenClass4 = new TweenMax.to("#device4", 1, {className: "+=animation-device4"});
	let tweenClass5 = new TweenMax.to("#device5", 1, {className: "+=animation-device5"});

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



	if(document.getElementById('html-portfolios')){
/*================================= CHANGING SCENE ========================================*/
	let tween8 = new TweenMax.to("#scroll-bg", 1.5, { opacity: 1})
	let tween9 = new TweenMax.to(".bg2", 1.5, { opacity: 1})
	let tween10 = new TweenMax.to(".bg3", 1.5, {opacity: 1})

	let bgAnimation1 = new ScrollMagic.Scene({
		triggerElement: ".scrolldown",
		triggerHook: 0.6,
		offset: 300,
		duration: 300
	})
	.setTween(tween8)
	.addTo(controller);

	let bgAnimation2 = new ScrollMagic.Scene({
		triggerElement: "#section-horizontal",
		triggerHook: 0.2,
		offset: 1000,
		duration: 300
	})	
	.setTween(tween9)
	.addTo(controller);

	let bgAnimation3 = new ScrollMagic.Scene({
		triggerElement: "#section-horizontal2",
		triggerHook: 0.3,
		offset: -100,
		duration:300
	})
	.setTween(tween10)
	.addTo(controller);
	/*================================= CHANGING SCENE ========================================*/
	var macBookProScene = new ScrollMagic.Scene({
		triggerElement: "#trigger2",
		triggerHook: 0.6,
		offset: -80,
		duration: 100
	})
	.setTween(tween6)
	.addTo(controller);

		function pathPrepare ($el) {
			var lineLength = $el[0].getTotalLength();
			$el.css("stroke-dasharray", lineLength);
			$el.css("stroke-dashoffset", lineLength);
		}
		
		var $s = $("path#s");
		var $a = $("path#a");
		var $e = $("path#e");
		var $k = $("path#k");
		var $o = $("path#o");
		var $r = $("path#r");
		var $dot1 = $("path#dot1");
		var $dot2 = $("path#dot2");
		var $dot3 = $("path#dot3");
		// prepare SVG
		pathPrepare($s);
		pathPrepare($a);
		pathPrepare($e);
		pathPrepare($k);
		pathPrepare($o);
		pathPrepare($r);
		pathPrepare($dot1);
		pathPrepare($dot2);
		pathPrepare($dot3);
		// build tween3
		var tween7 = new TimelineMax()
			.add(TweenMax.to($s, 0.9, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))
			.add(TweenMax.to($a, 0.7, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
			.add(TweenMax.to($e, 0.5, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
			.add(TweenMax.to($k, 0.3, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
			.add(TweenMax.to($o, 0.3, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
			.add(TweenMax.to($r, 0.2, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.2
			.add(TweenMax.to($dot2, 0.5, {stroke: "#BF209F", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
			.add(TweenMax.to($dot1, 0.3, {stroke: "#2D9CDB", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
			.add(TweenMax.to($dot3, 0.1, {stroke: "#50C53A", strokeDashoffset: 0, ease:Linear.easeNone, onComplete: function () {
				new ScrollMagic.Scene({
					triggerElement: "#k",
				})
				.setClassToggle("#s, #a, #e, #k, #o, #r", "filling_saeko_main")
				.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#k",
				})
				.setClassToggle("#dot1", "fill_blue")
				.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#k",
				})
				.setClassToggle("#dot2", "fill_purple")
				.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: "#k",
				})
				.setClassToggle("#dot3", "fill_green")
				.addTo(controller);
			}})) // draw word for 0.1
			.add(TweenMax.to("path", 1, {ease:Linear.easeNone}))
		// build scene
		var sceneDrawing = new ScrollMagic.Scene({
				triggerElement: "#trigger5", 
				tweenChanges: false,
				
			})
			.setTween(tween7)
			.addIndicators({name: "line 1"})
			.addTo(controller);

		let horizontalSlide = new TimelineMax().to(".ul", 1, {left: "-100%"});
		new ScrollMagic.Scene({
			triggerElement: "#section-horizontal",
			triggerHook: "onLeave",
			duration: "200%"
		})
		.setPin("#section-horizontal")
		.setTween(horizontalSlide)
		.addTo(controller);

		let scrollLineTween1 = new TimelineMax().to("#scroll-line", 1, {height: "280px"})
		let scrollLineTween2 = new TimelineMax().to("#scroll-line2", 1, {width: "550px"})
		let scrollLineTween3 = new TimelineMax().to("#scroll-line3", 1, {height: "60px"})
		let scrollLineTween4 = new TimelineMax().to("#scroll-line4", 1, {height: "300px"})

		let scrollLineAnimation1 = new ScrollMagic.Scene({
			triggerElement: "#r",
			triggerHook: 0.4,
			duration: 500
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
	}

})