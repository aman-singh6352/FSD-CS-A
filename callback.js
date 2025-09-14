function hello(user='Guest'){
    console.log(`Hello ${user}`);

}

function sum(a=0,b=0){
    console.log('before return')
    return a+b;
    // console.log('After return')
}

const add=(a=5,b=6)=>a+b
hello();
hello('ashish');
const z=sum();
console.log("sum="+z)
console.log(add());
(function(){
console.log('inside IIFE');
})();

function f1(user,callback){
    console.log(`Hello ${user}`);
    callback();
}

f1('admin',()=>{
    console.log(add(34,67));
});