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


