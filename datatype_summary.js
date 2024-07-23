//primitives datatypes
//non primitive datatypes
//7 types:
//stings, Number,Boolean, null, undefined, symbol,BigInt


const score=false
const id=Symbol('123')
const anotherid= Symbol('123')
console.log(id === anotherid)
const bignumber=2478364872365834765837456378456873465873n;

console.log(bignumber)

//ReferrenceTypes:Non-primitive: 
//Array, Objects, Functions
const heros= ['spiderman','thor','ironman']
let myobj={
    name:"soman",
    age: 22,

}
console.log(myobj)
function my(){
console.log("helloworld")

}
console.log(typeof(bignumber))
console.log(typeof(my))