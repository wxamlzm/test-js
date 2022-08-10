const arr1 = [1, 2, 3, 4]
const arr2 = arr1.flatMap(x => [x * 2])
const arr3 = arr1.map(x => [x * 2])

const arrStr = ["it's Sunny in", '', 'California']
const arrStr1 = arrStr.map(x => x.split(' '))
const arrStr2 = arrStr.flatMap(x => x.split(' '))
console.log(arrStr2)
