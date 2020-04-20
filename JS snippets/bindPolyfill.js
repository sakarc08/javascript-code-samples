Function.prototype.myBind = function myBind(obj, ...args) {
    var self = this;
    return function(...abc2) {
        self.apply(obj, [...args, ...abc2]);
    }
}

const obj = {
    name: 'Sakar',
    fun1: function(...args) {
        console.log('Name is :- ', this.name, ' ', args);
    }
}

const obj2 = {
    name: 'ABC',
}

const fun2 = obj.fun1.myBind(obj2, 1 , 2);
fun2(3,4);