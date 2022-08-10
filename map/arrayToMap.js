let kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2']
]

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray)

console.log(myMap.get('key1'))
