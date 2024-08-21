
// function range(start, end, step = 1) {
//     let array = [];
//     for (let i = start; i <=end; i+=step) {
//         array.push(i);
//     }
//     return array;
//     } 
// console.log(range(1,10))
    
function range(start, end, step = 1) {
    let array = [];
    for (let i = end; i >=start; i-=step) {
        array.push(i);
    }
    return array;
    } 
console.log(range(1,10))




