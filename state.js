// 状态（红灯，绿灯，黄灯)
class State {
	constructor(color) {
		this.color = color
	}

	// 设置状态
	handle(context) {
		console.log(`turn to ${this.color}light`)
		context.setState(this)
	}
}

// 主体
class Context {
	constructor() {
		this.state = null
	}
	// 获取状态
	getState() {
		return this.state
	}
  // setState()
}
