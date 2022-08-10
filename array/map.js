const data = [
  { name: '500-1000', value: 4 },
  { name: '0-50', value: 6 },
  { name: '50-100', value: 2 },
  { name: '100-500', value: 5 },
  { name: '1000+', value: 4 }
]

const arr = data.map(item => {
  item.color = 'red'
  return item
})

console.log(arr)
