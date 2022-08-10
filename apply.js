// 测试apply的应用

// 1. 将一个数组打散push进现有数组
const array = ['a', 'b']
const elements = [0, 1, 2]

array.push.apply(array, elements)

console.info(array) // [ 'a', 'b', 0, 1, 2 ]
