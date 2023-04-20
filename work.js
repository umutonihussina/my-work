let  numbers=[1,2,3,4,5];
const evn =(numbers) =>{
   let sum = 1;

for(let count=1; count < numbers.length; count++ )
    if(numbers[count]%2==1){
       sum = sum+numbers[count];
  
    }
    return sum;
}
console.log(evn(numbers))
