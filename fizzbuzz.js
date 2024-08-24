// for (i=1;i<=100;i++){
//     console.log(i);
// if (i%3==0){
//     console.log("fizz");
// }
// else if (i%5==0 && i%3!=0){
//     console.log("buzz")
// }
//     }

for (i=1;i<=100;i++){
    // console.log(i)
    if(i%3==0 && i%5==0){
        console.log(i,"fizzBuzz");
    }
    else if(i%3==0 && i%5!=0){
        console.log(i,"Fizz")
    }
    else if(i%5==0 && i%3!=0){
        console.log(i,"Buzz")
    }
    
}

