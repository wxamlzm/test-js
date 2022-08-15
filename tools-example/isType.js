// 为了解决重复定义问题，用isType如同工厂一般批量创建一些类似的函数
// 这种通过指定部分参数来产生一个新的定制函数的形式就是偏函数
// 根据传入的type参数和具体方法，生成一个需要调用多次蔡真真执行的实际函数的函数

// 类型判定工厂
const isType = type => {
  return function (obj) {
    // return toString.call(obj) == '[object ' + type + ']'
    return toString.call(obj) === `[object ${type}]`
  }
}

// example
const isString = isType('String')
const isFunction = isType('Function')
