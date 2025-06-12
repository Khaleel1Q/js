//adding sum of arrays using .reduce
let num = [1,3,2,3,4,5,6];
const sum = num.reduce((a,c)=>a+c,0)
console.log(sum)

// creating a new number array by doubling the elements of an existing array using map
const doubleNum = num.map(number =>{
    return number * 2
})
console.log(doubleNum)
//eliminating duplicates
let unique = new Set();
num.forEach(a=>unique.add(a))
console.log([...unique])

// reversing a string without split, join etc
let str = 'Abracadabra';
let reverseStr='';
for(let i = str.length-1; i>=0; i--){
    reverseStr += str[i];
}
console.log(str,'|',reverseStr)

// debounce example
function debounce(func, delay){
    let timeoutID;
    return function(...args){
        clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{func.apply(this,args)}, delay) 
    }
}

const debounced = debounce((value)=>{
    console.log('lastValue: ', value);
}, 500)

debounced(1)
debounced(2)
debounced(3)
debounced(4)
debounced(5)
debounced(6)//only this prints


// throttling
function throttle(func, delay){
    let timeoutID;
    return function(...args){
        if(timeoutID) return;
        timeoutID = setTimeout(()=>{
            func.apply(this,args);
            timeoutID = undefined;
        },delay)
    }
}

const throttled = throttle((value)=>{console.log(value,Date.now())},1000)

throttled('1');//prints
throttled('3');//ignored

setTimeout(()=>{
    throttled('1111');//prints
},2000)

// rest Operator
const [first,second, ...rest]  = [1,2,3,4,5,6,7];
console.log(first)
console.log(second)
console.log(rest)

function sum(...numbers){
    console.log(numbers)
    return numbers.reduce((a,c)=>a+c, 0)
} 

const total = sum(1,2,3,4,5,6,7,8,9)
console.log(total)

// spread Operator

const arr1 = [1,2,3];
const arr2 = [...arr1,4,5,6];
console.log(arr2)
const numbers = [22,33,11,1,2,4,1,6,76,32,43];
console.log(Math.max(...numbers))


