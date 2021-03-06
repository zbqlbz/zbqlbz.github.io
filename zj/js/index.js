$(function() {
	/** ====================================
	 *	BANNER 动效
	 *  ====================================
	 */
	var _moveSetting = {
		total: 4,
		index: 1,
		moving: false,
		timer: null,
		tabTime: 4000
	}

	//初始启动
	$('.J-left-1').addClass('fadeInLeft').show();
	$('.J-right-1').addClass('fadeInRight').show();
	startTimer();

	$('.J-tab-nav').hover(function() {
		stopTimer();
		_moveSetting.index = $(this).index();
		move();
	}, function() {
		startTimer();
	});

	/**
	 * 动画
	 */
	function move() {
		if(_moveSetting.index >= _moveSetting.total) {
			_moveSetting.index = 0;
		}

		$('.J-tab-nav').eq(_moveSetting.index).addClass('active').siblings().removeClass('active');
		$('.J-tab-bg').css('left', _moveSetting.index++ * 82);

		$('.J-content-bd img').hide();
		$('.J-left-' + _moveSetting.index).addClass('fadeInLeft').show();
		$('.J-right-' + _moveSetting.index).addClass('fadeInRight').show();
	}

	/*
	 * 启动计时器
	 */
	function startTimer() {
		_moveSetting.timer = setInterval(move, _moveSetting.tabTime)
	}

	/*
	 * 关闭计时器
	 */
	function stopTimer() {
		if(_moveSetting.timer !== null) {
			clearInterval(_moveSetting.timer);
		}
	}

	/** ====================================
	 *	WOW 效果
	 *  ====================================
	 */
	// new WOW().init();

	/** ====================================
	 *	用户数量
	 *  ====================================
	 */
	var $num = $('#userCount');
	var initCount = 12456456;
	var addCount = initCount;

	setInterval(startCount, 1000)

	/**
	 * 启动
	 */
	function startCount () {
		initCount = addCount;
		addCount += Math.round(Math.random()*1000);

		var initArr = split(toThousands(initCount));
		var addArr = split(toThousands(addCount));

		update(initArr, addArr);
	}

	/**
	 * 分离数字
	 * @param {Object} num
	 */
	function split(num) {
	    return (num || 0).toString().split('');
	}

	/**
	 * 增加千位符
	 * @param {Object} num
	 */
	function toThousands(num) {
		var num = (num || 0).toString(),
			result = '';
		while(num.length > 3) {
			result = '.' + num.slice(-3) + result;
			num = num.slice(0, num.length - 3);
		}
		if(num) {
			result = num + result;
		}
		return result;
	}

	/**
	 * 填充数字
	 * @param {Object} fromArr
	 * @param {Object} toArr
	 */
	function update(fromArr, toArr) {

		// 从个位数开始对齐位数
		fromArr = fromArr.reverse();
		toArr = toArr.reverse();

		if(fromArr.length > toArr.length) {
			toArr.length = fromArr.length
		} else {
			fromArr.length = toArr.length
		}

		fromArr = fromArr.reverse();
		toArr = toArr.reverse();

		// 渲染节点并激活动画
		var numberHTML = ''
		for(var i = 0; i < toArr.length; i++) {
			// 如果该位数的数字没有发生变化，则没有过渡效果
			if(fromArr[i] !== toArr[i]) {
				numberHTML += ('<li class="group active">' +
					'<span class="old">' + fromArr[i] + '</span>' +
					'<span class="new">' + toArr[i] + '</span>' +
					'</li>');
			} else {
				numberHTML += ('<li class="group">' +
					'<span class="old">' + fromArr[i] + '</span>' +
					'<span class="new">' + toArr[i] + '</span>' +
					'</li>');
			}
		}

		if(numberHTML) {
			$num.html(numberHTML);
		}
	}

});
