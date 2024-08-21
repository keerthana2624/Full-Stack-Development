// Q1. THE SUM OF RANGE


function range(start, end, step = 1) {
    let array = [];
    for (let i = start; i <=end; i+=step) {
        array.push(i);
    }
    return array;
    } 
// console.log(range(1,10))
    


function range(start, end, step = 1) {
    let array = [];
    for (let i = end; i >=start; i-=step) {
        array.push(i);
    }
    return array;
    } 
// console.log(range(1,10))




function rangeaddsum(start,end,step){
    sum=0
    for (let i=start;i<=end;i+=step){
        sum+=i
    }
    return sum
}
// console.log(rangeaddsum(1,10,1))

// Q2. REVERSING AN ARRAY


function reversArray(array){
    newarray=[]
    for(let i=array.length-1;i>=0;i--){
        newarray.push(array[i])
    }
    return newarray
}
// console.log(reversArray(["k","e","e","r","t","h","i"]))

