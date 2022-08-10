const nullValue = null
const emptyText = ''
const someNumber = 42

const valA = nullValue ?? 'valA的默认值'
const valB = emptyText ?? 'valB的默认值'
const valC = someNumber ?? 0

console.log(valA)
console.log(valB)
console.log(valC)
