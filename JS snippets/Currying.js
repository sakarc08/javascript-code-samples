// https://javascriptinterviewquestions.com/2020/04/add123-in-javascript-currying-interview.html

// Case 2: add(1)(2)(3)…(n)()


function parent(num1) {
    return function child(num2) {
        if(!num2) return num1;
        return parent(num1+num2);
    }
}

console.log(parent(1)(2)(3)(6)(8)());



// Case 3: sum(1,2)(3,4)
// So, this is similar as above just that we are accepting two arguments in single call. So, we need to add the arguments. Let’s look at the code:


function sum(a,b) {
  return function(c,d){
    return a+b+c+d
  }
}
 
// So, it’s making sense now. Now let’s raise the complexity.

// Case 4: add(1,2..n)(5,6…n)…(n)()
// Now in this case, everything is infinite. We already know infinite currying, let’s focus on infinite arguments.

function add(...args) {
  let a = args.reduce((a, b) => a + b, 0)
  return function(...args){
    let b = args.reduce((a, b) => a + b, 0)
    if(b){
      return add(a+b)
    }
    return a
  }
}
