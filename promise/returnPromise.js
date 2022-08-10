function myPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = { p: 'tt' }
      resolve(res)
    }, 300)
  })
}

function returnPromise () {
  return myPromise().then(res => res)
}

async function getPromise () {
  const res = await returnPromise()
  console.log(res)
}

// 一个过于长的环节，用于证明mdn中的描述await是用于获得promise的值，这好像在翻新代码时会有用
getPromise()
