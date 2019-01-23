$(function () {
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();

	let imagesIphoneCoteboard = [];
	let imagesIphoneSaeko = [];
	let imagesMac = [];

	(function(){
		addImages(imagesIphoneCoteboard, 47, "images/movile2/iphone_coteboard");
		addImages(imagesIphoneSaeko, 47, "images/movile/iphone_saeko");
		addImages(imagesMac, 47, "images/saekoImac/mac_saeko");
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
	var obj2 = {curImg: 0}

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
		curImg: imagesMac.length-1,
		roundProps: "curImg",
		repeat: 0,
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			$("#iphoneSaeko").attr("src", imagesIphoneSaeko[obj.curImg]);
		}	
	});

	let movile1Animation = new ScrollMagic.Scene({
		triggerElement: "#trigger1",
		triggerHook: 0.3,
		duration: 30
	})
	.setTween(tween)
	.addTo(controller);

	let movile2Animation = new ScrollMagic.Scene({
		triggerElement: "#trigger2",
		triggerHook: 0.3,
		duration: 30
	})
	.setTween(tween2)
	.addTo(controller);

	let macAnimation = new ScrollMagic.Scene({
		triggerElement: "#trigger3",
		triggerHook: 0.3,
		duration: 30
	})
	.setTween(tween3)
	.addTo(controller);

	let mac2Animation = new ScrollMagic.Scene({
		triggerElement: "#trigger4",
		triggerHook: 0.3,
		duration: 30
	})
	.setTween(tween4)
	.addTo(controller);

	let saeko2Animation = new ScrollMagic.Scene({
		triggerElement: "#trigger5",
		triggerHook: 0.3,
		duration: 30
	})
	.setTween(tween5)
	.addTo(controller);
})