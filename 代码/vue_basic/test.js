let obj = { x: 100 ,a:{o:0}}
let obj2 = { y: 200 }

Object.defineProperty(obj2, 'o', {
    get() {
        console.log("读取 obj.o")
        return obj.a.o
    },
    set(value) {
        console.log("改变 obj.o")
        obj.a.o = value
    }
})
console.log(obj2.o)
obj2.o=10
console.log(obj2.o)

console.log(obj)