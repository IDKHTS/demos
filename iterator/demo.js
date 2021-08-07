var obj = {
    a:'first',
    b:'second',
    c:'third',
    d:'fourth'
}
obj[Symbol.iterator]=function(){
    let ary = ['a','b','c','d']
    const self = this
    let index = 0
    
    // 返回遍历器对象
    return { 
        // 遍历器对象的next属性
        next:function(){
            return index<ary.length?
                {value:self[ary[index++]],done:false} :
            	{value:undefined,done:true}
        }
    }
}
for(let val of obj){
    console.log(val) // first second third fourth
}