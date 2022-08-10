// 测试构造函数中的this指向问题
function Student () {
  this.name = '张三'
}
// new will do the following things
// 1.Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
// 2.Points newInstance's [[Prototype]] to the constructor function's prototype property.
// 3."Executes" the constructor function with the given arguments, binding newInstance as the this context
// 4.
const z = new Student()
// 4. z.name = '张三'
console.log(z.name)

// 测试在普通函数中this的指向问题
function getStudent () {
  console.log(this.name)
}

// Student.prototype.getName = getStudent

z.getName()
