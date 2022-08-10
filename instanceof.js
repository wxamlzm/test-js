function _instanceof( s, F ) {
    if(s.__proto__ === F.prototype) {
        //找到目标
        return true
    } else if ( "__proto__" in F ) {
        // 存在上一层原型1
    } else {
        // 穷尽原型链仍找不到目标
        return false
    }
}

_instanceof(s, F);