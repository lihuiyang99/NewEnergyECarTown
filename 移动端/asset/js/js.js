$(function () {
	$(".test1").click(function (e) {
		alert(1123131231231231321231231312121321312)
		return false;
	})
})
$(function () {
	$(".test2").click(function (e) {
		alert(22222222)
		return false;
	})
})
$(function () {
	$(".test3").click(function (e) {
		alert(33)
		return false;
	})
})
$(function () {
	$("body").css("background", "#fff")
})
//# sourceMappingURL=../maps/js.js.map

// ------------------------
$(
	function () {
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			// autoplay:{
			// 	delay:3000
			// },
			// 如果需要分页器
			pagination: '.swiper-pagination',

			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	}
);

// 二级页面选项卡部分
var num = $('#tabs li').length;
var totalWidth = $('body').width();
var liWidth = eval(totalWidth / num - 1) + 'px';
//根据添加二级标题个数显示适应宽度
$('#tabs li').css({ width: liWidth });
$('#tabs li').parents().find('.tabCon').eq(0).children().eq(0).show();
$('#tabs').on('click', 'li', function () {
	$(this).addClass('active').append('<i></i>');
	$(this).siblings().removeClass('active');
	$(this).siblings().find('i').remove();
	var index = $(this).index();
	$(this).parents().find('.tabCon').eq(0).children().eq(index).show();
	$(this).parents().find('.tabCon').eq(0).children().eq(index).siblings().hide();
})

// 首页点击导航按钮出现下拉
$('.banner').on('click', '.navbtn', function () {
	$('.headerTop').slideDown();
	$('.headerTop .navCon').show();
})
//二级页面点击导航按钮出现下拉
$('.header').on('click', '.navbtn', function () {
	$('.headerTop').slideDown();
	$('.headerTop .navCon').show();
})
$('.headerTop').on('click', '.navbtn', function () {
	$('.headerTop').hide();
})


//获取小镇联盟 模块轮播图显示图片的对应文字内容
var lianmengData;
function getLianMeng() {
	$.ajax({
		url: 'aaa.json',
		async: false,
		method: 'get',
		success: function (data) {
			lianmengData = data
		}
	})
}


getLianMeng();

// 获取小镇联盟 模块轮播图显示图片index值，根据index值得到文字内容
var slideListNum;
function aaa(val) {
	slideListNum = val
	console.log(slideListNum);
	var title = lianmengData[slideListNum - 1].title;
	var desc = lianmengData[slideListNum - 1].desc;
	$('.wenzi .title').html(title);
	$('.wenzi .desc').html(desc);
}

