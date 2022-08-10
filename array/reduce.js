const array = [5, 4, 7, 8, 9, 2]

const init = 500

const sum = array.reduce((pre, cur) => (pre > cur ? pre : cur), init)

console.log(sum)

const getConcatedStr = (strBase, strArr) => {
  return strArr.reduce((pre, cur) => pre.concat(`${cur}\n`), `${strBase}\n`)
}

console.log(getConcatedStr('客户', [`买入`, `看涨`]))


formatter(
  contractDetailFormat,
  contractDetailFormat[row.prop]
) {
  ()
}