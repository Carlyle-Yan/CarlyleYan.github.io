/**
 * 下载APP对象，区分是微信，安卓，IOS
 * @authors Carlyle Yan (you@example.org)
 * @date    2017-08-25 14:03:51
 * @version $Id$
 */

var downApp = {
	cssText: "#weixin-tip{position: fixed; left:0; top:0; background: rgba(85,85,85,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}",
	isWeixin: (function() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	})(),
	isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
	isiOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	isUc:navigator.userAgent.indexOf('UCBrowser') > -1,
	loadHtml: function() {
		var div = document.createElement('div');
		div.id = 'weixin-tip';
		div.innerHTML = '<p><img src="assets/img/live_weixin.png" style="width:100%;height:auto" alt="微信打开"/></p>';
		document.body.appendChild(div);
	},
	loadStyleText: function(cssText) {
		var style = document.createElement('style');
		style.rel = 'stylesheet';
		style.type = 'text/css';
		try {
			style.appendChild(document.createTextNode(cssText));
		} catch (e) {
			style.styleSheet.cssText = cssText; //ie9以下
		}
		var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
		head.appendChild(style);
	}
};