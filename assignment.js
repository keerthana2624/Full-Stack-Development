function countB(string){
    count=0
    for(let i=0;i<string.length;i++){
        if(string[i]=='B'){
            count+=1
        }
    } 
    return count
}
// console.log(countB("BhaiBhaibhaaB"))


   
function countB(string,char){
    count=0
    for(let i=0;i<string.length;i++){
        if(string[i]==char){
            count+=1
        }
    } 
    return count
}
console.log(countB("hihihihi","h"))