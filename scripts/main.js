"use strict";
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
	(function() {
		var $music_height = $(window).height() - $("header").height();
		$("#music").height($music_height);
	})();
	(function() {
		new Vue({
			el:"#app",
			data: {
				message: [],
				info: '',
				nowIndex: -1,
				id: '',
				playList: [],
				isShow: false,
				url:'http://om5.alicdn.com/712/55712/2008078346/1773430479_15653991_l.mp3?auth_key=9819106f741c966b46407cdd0aaa3691-1482634800-0-null',
			},
			methods: {
				get: function(e) {
					if(e.keyCode == 38 || e.keyCode == 40) {
						return;
					}
					this.$http.jsonp("http://www.xiami.com/ajax/search-index?key="+this.info)
					.then(function(res) {
						this.message = res.data.song;
						//console.log(res.data.song);
					})
				},
				changeDown: function() {
					this.nowIndex++;
					if(this.nowIndex == this.message.length) {
						this.nowIndex = 0;
					}
					this.info = this.message[this.nowIndex].title;
				},
				changeUp: function() {
					this.nowIndex--;
					if(this.nowIndex < 0) {
						this.nowIndex = this.message.length - 1;
					}
					this.info = this.message[this.nowIndex].title;
				},
				play: function(index) {
					this.id = this.message[index].song_id;
					this.$http.jsonp("http://www.xiami.com/song/playlist/id/"+this.id+"/cat/json?_ksTS=1482027987976_389&callback=jsonp390").then(function(res) {
						//console.log(res.data.data.trackList[0].allAudios[0].filePath);
						console.log(res);
						this.url = res.data.data.trackList[0].allAudios[1].filePath;
						// console.log(this.url)
					});
				},
				/*获得焦点失去焦点时,显示/隐藏搜索框,因为这里需要点击播放,所以没有这个功能*/
				// show: function() {
				// 	this.isShow = true;
				// },
				// hide: function() {
				// 	this.isShow = false;
				// }
			}
		})
	})();
});
