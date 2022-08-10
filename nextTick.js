process.nextTick(()=>{
    console.log('nextTick延迟执行1')
})
process.nextTick(()=>{
    console.log('nextTick延迟执行2')
})

setImmediate( () => {
    console.log('setImediate延迟执行1')
    // 进入下次循环
    process.nextTick(()=>{
        console.log('强势插入')
    })
})

setImmediate(()=>{
    console.log('setImmediate延迟执行2')
})

console.log('正常执行')