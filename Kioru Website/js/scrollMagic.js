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
		addImages(macBookPro, 47, "images/mac-book-pro/mac_opening");
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
		duration:  window.innerWidth > 991 ? 50 : 100
	})
	.setTween(tween)
	.addIndicators({name: "first animation"})
	.addTo(controller);

	let movile2Animation = new ScrollMagic.Scene({
		triggerElement: window.innerWidth > 991 ? "#trigger2" : "#trigger2-mobile",
		triggerHook: 0.3,
		duration: window.innerWidth > 991 ? 50 : 100
	})
	.setTween(tween2)
	.addIndicators({name: "second animation"})
	.addTo(controller);

	let macAnimation = new ScrollMagic.Scene({
		triggerElement: window.innerWidth > 991 ? "#trigger3" : "#trigger3-mobile",
		triggerHook: 0.3,
		duration: window.innerWidth > 991 ? 50 : 100
	})
	.setTween(tween3)
	.addIndicators({name: "third animation"})
	.addTo(controller);

	let mac2Animation = new ScrollMagic.Scene({
		triggerElement: window.innerWidth > 991 ? "#trigger4" : "#trigger4-mobile",
		triggerHook: 0.3,
		duration: window.innerWidth > 991 ? 50 : 100
	})
	.setTween(tween4)
	.addIndicators({name: "fourth animation"})
	.addTo(controller);

	let saeko2Animation = new ScrollMagic.Scene({
		triggerElement: window.innerWidth > 991 ? "#trigger5" : "#trigger5-mobile",
		triggerHook: 0.3,
		duration: window.innerWidth > 991 ? 50 : 100
	})
	.setTween(tween5)
	.addIndicators({name: "fifth animation"})
	.addTo(controller);

	let macBookProAnimation = new ScrollMagic.Scene({
		triggerElement: "#macBookPro",
		triggerHook: 0.3,
		duration: 130
	})
	.setTween(tween6)
	.addIndicators({name: "sixth animation"})
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
	.addIndicators({name: "device 1 animation"})
	.addTo(controller);

	let deviceAnimation2 = new ScrollMagic.Scene({
		triggerElement: "#trigger7",
		triggerHook: 0.3,
		duration: 150
	})
	.setTween(tweenClass2)
	.addIndicators({name: "device 2 animation"})
	.addTo(controller);

	let deviceAnimation3 = new ScrollMagic.Scene({
		triggerElement: "#trigger8",
		triggerHook: 0.3,
		duration: 100
	})
	.setTween(tweenClass3)
	.addIndicators({name: "device 3 animation"})
	.addTo(controller);

	let deviceAnimation4 = new ScrollMagic.Scene({
		triggerElement: "#trigger9",
		triggerHook: 0.3,
		duration: 150
	})
	.setTween(tweenClass4)
	.addIndicators({name: "device 4 animation"})
	.addTo(controller);

	let deviceAnimation5 = new ScrollMagic.Scene({
		triggerElement: "#trigger9",
		triggerHook: 0.3,
		duration: 150
	})
	.setTween(tweenClass5)
	.addIndicators({name: "device 5 animation"})
	.addTo(controller);

})