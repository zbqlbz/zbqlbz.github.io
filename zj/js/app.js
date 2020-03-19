renderHeader(dealCurrentNav);
renderFooter();

/** ====================================
 *	侧栏客服
 *  ====================================
 */
var SERVICE_URL = 'http://shang.qq.com/wpa/qunwpa?idkey=975d79b1868b5588c9f0213ed5d3faaa62add84d69392ce5fbe1aaeb1167b4fc'; //客服地址
var QQS_URL = 'http://shang.qq.com/wpa/qunwpa?idkey=ba030a7ff4f7eab18888795c8af6b9e5117f6fc5d565b3092e7d99336b41d7c7'; //qq群地址
var QR_IMG = 'wechat_qr.png'; //公众号二维码
var QQZOEN = 'qqzoen.png'
var BDTB = 'bdtb.png'
var XLWB = 'xlwb.png'
var DB = 'db.png'
var QQF = 'qqf.png'
var WX = 'wx.png'
var WXEWM = 'wxewm.png'
var qzoneShareUrk = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://hbs.binggongjinghua.com/&title=http://hbs.binggongjinghua.com/ 韩博士-韩博士装机大师，傻瓜式的一键重装系统软件，简单易懂，方便快捷的帮助你重装电脑'
var baidutiebaShareUrk = 'http://tieba.baidu.com/f/commit/share/openShareApi?url=http://hbs.binggongjinghua.com/&title=http://hbs.binggongjinghua.com/ 韩博士-韩博士装机大师，傻瓜式的一键重装系统软件，简单易懂，方便快捷的帮助你重装电脑'
var serviceweiboShareUrk = 'http://service.weibo.com/share/share.php?url=http://hbs.binggongjinghua.com/&title=http://hbs.binggongjinghua.com/韩博士-韩博士装机大师，傻瓜式的一键重装系统软件，简单易懂，方便快捷的帮助你重装电脑'
var qqhaoyouShareUrk = 'https://connect.qq.com/widget/shareqq/index.html?url=http://hbs.binggongjinghua.com/&title= 韩博士-韩博士装机大师，傻瓜式的一键重装系统软件，简单易懂，方便快捷的帮助你重装电脑'
var doubanShareUrk = 'https://www.douban.com/share/service?href=http://hbs.binggongjinghua.com/&name=http://hbs.binggongjinghua.com/ 韩博士-韩博士装机大师，傻瓜式的一键重装系统软件，简单易懂，方便快捷的帮助你重装电脑'


var serviceHtml = '<div class="service">' +
	'<ul>' +
	'<li class="to-top" style="opacity: 0;">' +
		'<a class="J-to-top" href="javascript:;">回到顶部</a>' +
	'</li>' +

	'<li class="share">'+
	    '<div class="share-content">' +

		    '<div class="share-fx1 fade1"> '+
			    '<div class="share-fx1-tp">'+
			    	'<a href="'+ qzoneShareUrk +'" target= "_blank">'+
				        '<img src="img/'+ QQZOEN +'" alt="QQ空间分享" />' +
				        '<span>QQ空间</span>'+
			        '</a>'+
			    '</div>'+
		    '</div>'+

		    '<div class="share-fx1 fade2"> '+
			    '<div class="share-fx1-tp">'+
			    	'<a href="'+ baidutiebaShareUrk +'" target= "_blank">'+
				        '<img src="img/'+ BDTB +'" alt="百度贴吧分享" />' +
				        '<span>百度贴吧</span>'+
			        '</a>'+
			    '</div>'+
		    '</div>'+

			'<div class="share-fx1 fade3"> '+
			    '<div class="share-fx1-tp">'+
			    '<a href="'+ serviceweiboShareUrk +'" target= "_blank">'+
			        '<img src="img/'+ XLWB +'" alt="新浪微博分享" />' +
			        '<span>新浪微博</span>'+
			        '</a>'+
			    '</div>'+
		    '</div>'+

		    '<div class="share-fx1 fade4"> '+
			    '<div class="share-fx1-tp">'+
			    '<a href="'+ doubanShareUrk +'" target= "_blank">'+
			        '<img src="img/'+ DB +'" alt="豆瓣网分享" />' +
			        '<span>豆瓣网站</span>'+
			        '</a>'+
			    '</div>'+
		    '</div>'+

		    '<div class="share-fx1 fade5"> '+
			    '<div class="share-fx1-tp">'+
			    '<a href="'+ qqhaoyouShareUrk +'" target= "_blank">'+
			        '<img src="img/'+ QQF +'" alt="QQ好友分享" />' +
			        '<span>QQ好友</span>'+
			        '</a>'+
			    '</div>'+
		    '</div>'+



	    '</div>' +
    '</li>'+

	'<li class="customer">' +
		'<a target="_blank" href="' + SERVICE_URL + '">客服</a>' +
	'</li>' +
	'<li class="qqs">' +
		'<a target="_blank" href="' + QQS_URL + '">QQ群</a>' +
	'</li>' +

		'</div>' +
	'</li>' +
	'</ul>' +
	'</div>';

$('body').append(serviceHtml);

//滚动大雨100，显示回到顶部按钮
$(window).on('scroll', function() {
	if($(window).scrollTop() > 100) {
		$(".service .to-top").css('opacity', 1);
	} else {
		$(".service .to-top").css('opacity', 0);
	}
});

//回到顶部
$('.J-to-top').on('click', function() {
	$('html,body').animate({
		scrollTop: 0
	}, 400);
});


// 此段效果为新增代码

//分享显示-隐藏
$('.share').hover(function() {
	$('.share-content').stop().fadeIn();

	$('.share-content > div').each(function (i) {
		$(this).stop().animate({
			left: 0,
			opacity: 1
		}, i*250)
	})

}, function() {
	$('.share-content').stop().fadeOut();

	$('.share-content > div').each(function (i) {
		$(this).stop().animate({
			left:-200,
			opacity: 0
		}, i*250)
	})
});

//微信公众号显示-隐藏
$('.J-wechat-trigger').hover(function() {
	$('.J-wechat-content').stop().fadeIn();
}, function() {
	$('.J-wechat-content').stop().fadeOut();
});

/**
 * 渲染顶部导航栏
 */
function renderHeader(cb) {
	var headerHtml = '<a class="logo" title="韩博士装机大师" href="index.html"><img src="./img/header_logo.png" alt="韩博士装机大师"></a>' +
		'<ul class="nav">' +
		'<li class="on"><a href="index.html" data-title="index">首页</a></li>' +
		'<li><a href="uDiskStart.html" data-title="uDiskStart">U盘启动</a></li>' +
		'<li><a href="reInstall.html" data-title="reInstall">在线重装</a></li>' +
		'<li><a href="backup.html" data-title="backup">一键备份</a></li>' +
		'<li><a href="update.html" data-title="update">升级更新</a></li>' +
		'</ul>';

	$('#pageHeader').html(headerHtml);

	cb && cb();
}

/**
 * 匹配文件名，给当前导航添加.on
 */
function dealCurrentNav() {
	var fileName = location.pathname;

	$('#pageHeader li a').each(function(i, el) {
		var $this = $(this);
		var title = $this.attr('data-title');

		if(fileName.indexOf(title) > 0) {
			$('#pageHeader li').removeClass('on');
			$this.parent().addClass('on');
		}
	});

}

/**
 * 渲染底部信息
 */
function renderFooter() {
	var footerHtml = '<p>系统仅为个人学习测试使用，请在下载后24小时内删除，不得用于任何商业用途，否则后果自负，请支持购买微软正版软件！</p>' +
        '<p>如侵犯到您的权益,请及时通知我们,我们会及时处理。</p>'+
		'<p>版权:包头市兵工精细化学有限公司</p>' +
		'<p><a href="about.html" target="_blank">关于我们</a> -  <a href="linkus.html" target="_blank">联系我们</a> -  <a href="statement.html" target="_blank">使用条款</a></p>';

	$('#pageFooter').html(footerHtml);
}

/**
 * 解析查询字符串
 */
function getQueryArgs() {
	//取得查询字符串并去掉？
	var qs = location.search.length > 0 ? location.search.substring(1) : '',

		//保存数据
		args = {},

		//取得每一项
		items = qs.length ? qs.split('&') : [],
		item = null,
		name = null,
		value = null,
		i = 0,
		len = items.length;

	//将每一项添加到args
	for(i = 0; i < len; i++) {
		item = items[i].split('=');
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length) {
			args[name] = value;
		}
	}
	return args;
}

/**
 * 获取前一天: 20xx-xx-xx
 */
function getFrontDate() {
	var date = new Date(new Date() - 24 * 60 * 60 * 1000);

	return date.toJSON().split('T')[0];
}

/** ====================================
 *	添加统计代码
 *  ====================================
 */

var COUNT_ACRIPT = '<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id=\'cnzz_stat_icon_1262545875\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1262545875%26show%3Dpic\' type=\'text/javascript\'%3E%3C/script%3E"));</script>';
$('body').append(COUNT_ACRIPT);
