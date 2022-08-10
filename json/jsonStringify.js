function replacer (key, value) {
  if (typeof value === 'string') {
    return undefined
  }
  return value
}

var foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 45,
  transport: 'car',
  month: 7
}

var jsonString = JSON.stringify(foo, replacer)
