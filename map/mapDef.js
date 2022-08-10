const myMap = new Map()

let keyObj = {}

let keyFunc = function () {}

let keyString = 'a string'

// 添加键
myMap.set(keyString, "和键'a string'关联的值")
myMap.set(keyObj, '和键keyObj关联的值')
myMap.set(keyFunc, '和键keyFunc关联的值')

myMap.size

// 读取值
myMap.get(keyString) // "和键'a string'关联的值"
myMap.get(keyObj) // "和键keyObj关联的值"
myMap.get(keyFunc) // "和键keyFunc关联的值"

myMap.get('a string')
myMap.get({})
myMap.get(function () {})

console.log(myMap)
