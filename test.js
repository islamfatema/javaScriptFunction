let employeeSummary = function(name,age,location){
   
    lastPayCheck= [
        {
          month: 'August',
          amount: 2000,
        },
        {
          month: 'September',
          amount: 1000,
        },
      ];
      let updatedValue= lastPayCheck[1].amount + 2000;

console.log(`${name} is  ${age} years old, lives in ${location} and his last paycheck was ${lastPayCheck[0].amount}.`);
console.log(`${name} is ${age+1} years old lives in ${location} and his ${lastPayCheck[1].month} 's paycheck amount is  ${updatedValue}`); 
}
employeeSummary("Mohammad",32,"New York");