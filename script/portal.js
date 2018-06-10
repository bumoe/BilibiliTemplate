// 幻灯片开始
var slide = jq('.topic-preview-wrapper');
var picListWrapper = slide.find('.topic-preview-list-wrapper');
var picList = picListWrapper.find('.topic-preview');
var sBottom = slide.find('.s-bottom');
var sBottomLi = sBottom.find('li');
var sBottomLiFirst = sBottomLi.eq('0');
// 点击事件
sBottom.on('click', 'li', function(event) {
	event.preventDefault();
	var t = jq(this);
	var num = t.index();
	picList.animate({
		marginLeft: "-" + 100 * num + "%"
	}, "fast");
	t.siblings().removeClass('on').end().addClass('on');
});
// 自动轮播
var slideAutoPlayInt = self.setInterval("slideAutoPlay()", 7000);

function slideAutoPlay() {
	var nowBar = sBottom.find('li.on');
	if (nowBar.index() === 6) {
		sBottomLiFirst.click();
	} else {
		nowBar.next().click();
	}
}

// 视频列表模块开始
var videoList = jq('.container-row');
var videoListLHeadTab = videoList.find('.b-l .b-head .b-slt-tab');
var videoListRHeadTab = videoList.find('.b-r .b-head .b-slt-tab');
var videoListLBody = videoList.find('.b-l .b-body');
// 左侧标签切换功能
videoListLHeadTab.on('click', 'li', function() {
	var t = jq(this);
	var rank = t.index();
	var contents = t.parents('.b-l').find('.b-body .v-list').children();
	t.siblings().removeClass('on').end().addClass('on');
	contents.hide();
	contents.eq(rank).show();
});
// 右侧标签切换功能
videoListRHeadTab.on('click', 'li', function() {
	var t = jq(this);
	var rank = t.index();
	var contents = t.parents('.b-r').find('.b-body .r-list-wrapper');
	t.siblings().removeClass('on').end().addClass('on');
	contents.css('margin-left', '-' + rank * 100 + '%');

});

// 回到顶部
backTopFrame.on('click', '.sortable', function(event) {
	var t = jq(this);
	var name = t.attr('name');
	var point = jq('#' + name).offset().top;
	animateScroll(point);
});