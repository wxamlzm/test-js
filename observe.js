function Observer() {
	this.update = function () {}
}

function Subscribe() {}

Subscribe.prototype.addObserver = function (observer) {}

Subscribe.prototype.notify = function () {}

var subscribe = new Subscribe()

// 定义一个佩奇猪观察者
var peikizhuObs = new Observer()
peikizhuObs.update = function (what) {
	console.log("12 o'click! 佩琦珠想要" + what)
}
subscribe.addObserver(peikizhuObs)

// 定义一个皮卡丘观察者
var pikachuObs = new Observer()
pikachuObs.update = function (what) {
	console.log(
		'皮卡丘还可以做一点自己比较个性的事情，但是12点我也是要去吃饭的！'
	)
	console.log("12 o'clock! 皮卡丘想要" + what)
}
subscribe.addObserver(pikachuObs)

// 假装12点到了
subscribe.notify('去吃饭啦')

