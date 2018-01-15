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
var num = $('#tabs ul li').length;
var totalWidth = $('body').width();
var liWidth = eval(totalWidth / num - 1) + 'px';
//根据添加二级标题个数显示适应宽度
$('#tabs .clearfix li').css({ width: liWidth });
$('#tabs .clearfix li').parents().find('.tabCon').eq(0).children().eq(0).show();
$('#tabs .clearfix').on('click', 'li', function () {
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
lianmengData=[
    {"title":"中国汽车创新孵化器联盟","desc":"标题4内容"},
    {"title":"沃特玛汽车产业联盟","desc":"深圳市沃特玛电池有限公司是国内最早成功研发新能源汽车动力电池并率先实现规模化生产和批量应用的企业之一，中国沃特玛新能源汽车产业创新联盟理事长单位，国家高新技术企业和深圳市工业百强企业。截至2017年10月，拥有专利1900余项，其中发明专利623项，国际专利10项，主要技术指标处于国际领先水平，先后成为“国家级高新技术企业”、“深圳市高新技术企业”、国家“2012年新能源汽车产业技术创新工程项目”支持企业和“2014年国家火炬计划重点高新技术企业”，并于2015年11月入选工信部首批《汽车动力蓄电池行业规范条件》企业目录。"},
    {"title":"碧桂园","desc":"碧桂园集团成立于1992年，2007年在香港上市，是《财富》全球500强企业。碧桂园是中国新型城镇化进程的身体力行者，是全球绿色生态智慧城市的建造者，为超过400个城镇带来现代化的城市面貌，服务超300万业主，是世界销售面积第一的房地产开发商，稳居国内地产企业前三甲。目前，依托碧桂园多年积累的丰富资源，集团将迈入产城一体化领域。"},
    {"title":"5所技术研发中心","desc":"标题4内容"},
    {"title":"5所技术研发中心","desc":"标题5内容"}
];
function getLianMeng() {
	$.ajax({
		url: '../../json',
		async: false,
		type: 'get',
		success: function (data) {
			lianmengData = data
			console.log(lianmengData)
		}
	})
}


//getLianMeng();

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

