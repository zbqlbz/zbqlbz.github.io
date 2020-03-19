setDownloadUrl();

/**
 * 设置下载地址
 */
function setDownloadUrl() {
	/** ====================================
	 *	韩博士下载地址
	 *  ====================================
	 */
    //默认下载地址
	var NORMAL = 'http://softdown.coumie.top:8010/hbsv3_c1_sem.exe';

	//韩博士百度网盘地址
	var BAI = 'https://pan.baidu.com/s/1c41ecyYF6euqBeqTmwG4uQ';

	//韩博士迅雷地址
	var XUNLEI = 'thunder://QUFodHRwOi8vc29mdGRvd24uY291bWllLnRvcDo4MDEwL2hic3YzX2MxX3NlbS5leGVaWg==';

	/** ====================================
	 *	系统下载地址
	 *  ====================================
	 */

	//xp-本地
	var XP = 'http://hbsds.ruanjiandown.com:8769/iso/GHOST_XP_SP3_V2019_01_31_01.iso';
	//xp-迅雷地址
	var XP_XUNLEI = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9HSE9TVF9YUF9TUDNfVjIwMTlfMDFfMzFfMDEuaXNvWlo=';

	//win7_32-本地
	var WIN_7_32 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN7_X86_2019_01_31_01.iso';
	//win7_32-迅雷
	var WIN_7_XUNLEI_32 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU43X1g4Nl8yMDE5XzAxXzMxXzAxLmlzb1pa';
	//win7_64-本地
	var WIN_7_64 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN7_X64_2019_01_31_01.iso';
	//win7_64-迅雷
	var WIN_7_XUNLEI_64 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU43X1g2NF8yMDE5XzAxXzMxXzAxLmlzb1pa';

	//win8_32-本地
	var WIN_8_32 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN8_X86_2019_01_31_01.iso';
	//win8_32-迅雷
	var WIN_8_XUNLEI_32 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU44X1g4Nl8yMDE5XzAxXzMxXzAxLmlzb1pa';
	//win8_64-本地
	var WIN_8_64 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN8_X64_2019_01_31_01.iso';
	//win8_64-迅雷
	var WIN_8_XUNLEI_64 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU44X1g2NF8yMDE5XzAxXzMxXzAxLmlzb1pa';

	//win10_32-本地
	var WIN_10_32 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN10_X86_2019_01_31_01.iso';
	//win10_32-迅雷
	var WIN_10_XUNLEI_32 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU4xMF9YODZfMjAxOV8wMV8zMV8wMS5pc29aWg==';
	//win10_64-本地
	var WIN_10_64 = 'http://hbsds.ruanjiandown.com:8769/iso/WIN10_X64_2019_01_31_01.iso';
	//win10_64-迅雷
	var WIN_10_XUNLEI_64 = 'thunder://QUFodHRwOi8vaGJzZHMucnVhbmppYW5kb3duLmNvbTo4NzY5L2lzby9XSU4xMF9YNjRfMjAxOV8wMV8zMV8wMS5pc29aWg==';



	$('.J-download') && $('.J-download').attr('href', NORMAL);
	$('.J-bai-download') && $('.J-bai-download').attr('href', BAI);
	$('.J-xunlei-download') && $('.J-xunlei-download').attr('href', XUNLEI);

	$('.J-winxp-local') && $('.J-winxp-local').attr('href', XP);
	$('.J-winxp-xunlei') && $('.J-winxp-xunlei').attr('href', XP_XUNLEI);

	$('.J-win7-local-32') && $('.J-win7-local-32').attr('href', WIN_7_32);
	$('.J-win7-xunlei-32') && $('.J-win7-xunlei-32').attr('href', WIN_7_XUNLEI_32);
	$('.J-win7-local-64') && $('.J-win7-local-64').attr('href', WIN_7_64);
	$('.J-win7-xunlei-64') && $('.J-win7-xunlei-64').attr('href', WIN_7_XUNLEI_64);

	$('.J-win8-local-32') && $('.J-win8-local-32').attr('href', WIN_8_32);
	$('.J-win8-xunlei-32') && $('.J-win8-xunlei-32').attr('href', WIN_8_XUNLEI_32);
	$('.J-win8-local-64') && $('.J-win8-local-64').attr('href', WIN_8_64);
	$('.J-win8-xunlei-64') && $('.J-win8-xunlei-64').attr('href', WIN_8_XUNLEI_64);

	$('.J-win10-local-32') && $('.J-win10-local-32').attr('href', WIN_10_32);
	$('.J-win10-xunlei-32') && $('.J-win10-xunlei-32').attr('href', WIN_10_XUNLEI_32);
	$('.J-win10-local-64') && $('.J-win10-local-64').attr('href', WIN_10_64);
	$('.J-win10-xunlei-64') && $('.J-win10-xunlei-64').attr('href', WIN_10_XUNLEI_64);
}
