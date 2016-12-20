$(function() {
	/*animated*/
	(function() {
		$(".nav > li").on("mouseenter", function() {
			$(this).removeClass('bounceInLeft')
			$(this).addClass('pulse');
		}).on("mouseleave", function() {
			$(this).removeClass('pulse');
		});
		if($(window).height() < 613 ) {
			$(".nav > li").removeClass('animated');
		}
	})();
	// (function() {
	// 	var $music_height = $(window).height() - $("header").height();
	// 	$("#timeline").height($music_height);
	// })();
})