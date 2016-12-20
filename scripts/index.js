"use strict";
$(function() {
	/*计算header的高度*/
      (function() {
        let $index_height = $(window).height();
        $("#header").height($index_height);
      })();
	/*首页星空效果*/
	(function() {
		$('#header').starfield();
	})();
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
	/*导航*/
	(function() {
		$(window).on('scroll', function() {
			if ($(".navbar").offset().top > 50) {
		        $(".navbar-fixed-top").addClass("top-nav-collapse");
		    } else {
		        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		    }
		});
	})();
	/*平滑过度喵点*/
	(function() {
		$(".page-scroll").on("click", function() {
			$("html, body").animate({
		      scrollTop: $($(this).attr("href")).offset().top + "px"
		    }, {
		      duration: 500,
		      easing: "swing"
		    });
		    return false;
		})
	})();
	/*自我评价切换*/
	(function() {
		$(".self-circle li").on("mouseenter",function() {
			// alert($(this).index());
			$(".self-content li").eq($(this).index()).show().siblings(".self-content li").hide();
			$(this).addClass("active").siblings().removeClass("active");
		});
	})();
	/*表单验证*/
	(function() {
		$("#form").submit(function(e) {
			let name = $("#name");
			let email = $("#email");
			let message = $("#message");
			let info_name = $(".info-name");
			let info_email = $(".info-email");
			let info_text = $(".info-text");
			let regex = "^w+[-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$";
			if(name.val() == '') {
				info_name.html("<p class='pull-left color'>请输入您的姓名!</P>");
				name.focus();
				return false;
			}

			if(email.val() == '') {
				info_email.html("<p class='pull-left color'>请输入您的邮箱!</P>")
				email.focus();
				return false;
			} else {
				if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.val()) == false) {
					info_email.html("<p class='pull-left color'>邮箱格式不对!</P>")
					email.focus();
					return false;
				}
			}


			if(message.val() == '') {
				info_text.html("<p class='pull-left color'>请输入内容!</P>")
				message.focus();
				return false;
			}
		})
	})();
});
