// 找出数组中第二小的元素的索引

// 对象 key 是数字时有序
function find (arr) {
  var tmp = {}
  arr.forEach(num => {
    return (tmp[num] = true)
  })
  console.log(tmp)
  return arr.indexOf(Number(Object.keys(tmp)[1]))
}

function find2 (arr) {
  return arr.indexOf([...new Set(arr)].sort((a, b) => a - b)[1])
}

function find3 (arr) {
  let mins = [0, 0]
  for (let i = 1; i < arr.length; i++) {
    // 如果当前数值跟mins钟的任意一个相同，那直接忽略
    if (arr[i] === arr[mins[0]] || arr[i] === arr[mins[1]]) {
      continue
    }
    // 如果当前数值小于最小的那个，即 arr[mins[0]],
    // 那mins[0]替换为当前index, 原来的值顺移到 mins[1]
    if (arr[i] < arr[mins[0]]) {
      ([mins[1]], mins[0] = [mins[0], i])
    }
    // 否则，如果mins钟的两个值相同，直接替换掉mins[1],此时mins[1]指向的不是当前最小的就是当前第二小的
    // 如果不同，但当前值小于mins[1]对应的值，也替换掉mins[1],此时 min[1]指向的是当前第二小
    else if (arr[mins[0]] == arr[mins[1]] || arr[i] < arr[mins[1]]) {
      mins[1] = i
    }
  }
}

var arr = [0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 7, 0, 9]

console.log(find(arr))
