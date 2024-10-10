let a=[2,4,6];
let count=8;
let missArray=[];
for(let i=1;i<=count;i++){
    if(!a.includes(i)){
        missArray.push(i)
    }
}
console.log(missArray)