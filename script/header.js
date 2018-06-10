// 回到顶部
var backTopFrame=jq('.index-nav');

backTopFrame.on('click', '.gotop', function(event) {
	animateScroll('0');
});

jq(document).scroll(function() {
	if (jq(document).scrollTop() >= 300) {
		backTopFrame.css('opacity', '1');
	} else {
		backTopFrame.css('opacity', '0');
	}

});

function animateScroll(point) {
	jq('html,body').animate({scrollTop: point}, 200);
}