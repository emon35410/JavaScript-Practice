let n=81;
let sum=0;
while(n<=131){
    if(n%2!==0){
        console.log(n)
        sum=sum+n;
        console.log('Sum = ' + sum);
    }
    n++;
}