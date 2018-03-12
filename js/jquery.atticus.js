;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var right = parseInt($(".nav").css("right"));
			if(right == -200){
				$(this).animate({
					right:200
				}, 300);
				$(".nav").animate({
					right:0
				}, 300);
			}
			else{
				$(this).animate({
					right:0
				}, 300);
				$(".nav").animate({
					right:-200
				}, 300);	
			}
		});
	}

	function heading(){
		$(".heading2").css({opacity:0});
		$(".heading2").waypoint(function() {
            $(".heading2").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function bannerTxtAnimation(){
		$(".bannerContent").css({opacity:0});
		$(".bannerContent").waypoint(function() {
            $(".bannerContent").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function textEffectRight(){
		$(".txtEffectRight").css({opacity:0});
		$(".txtEffectRight").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {right:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}
	function textEffectLeft(){
		$(".txtEffectLeft").css({opacity:0});
		$(".txtEffectLeft").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {left:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}
	function textEffectRight(){
		$(".txtEffectRight").css({opacity:0});
		$(".txtEffectRight").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {right:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}

	function tabs(){
		$(".tabContent").eq(0).slideDown(300);
		$(".tabs li a").eq(0).addClass("activeTab");
		$(".tabs li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".tabs li a").removeClass("activeTab");
				$(".tabContent").slideUp(300);
				$(this).addClass("activeTab");
				$(target).slideDown(300);
				return false;
			});
		});
	}


	$(function(){
		mobileNav();
		tabs();
		if(!device){
			bannerTxtAnimation();
			heading();
			textEffectLeft();
			textEffectRight();
		}
		
	});

})(jQuery);




