// function isLeapYear(year){
//     const reminder=year%4;
//     if(reminder==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const leapYear=isLeapYear(2000);
// console.log(leapYear)

// function leapYear(year){
     
//    if (years/400){
//       result = true
//     }
//     else if(years/100){
//       result = false
//     }
//     else if(years/4){
//       result= true
//     }
//     else{
//       result= false
//     }
//     return result
//  }
//  const year2000=leapYear(2000);
//  console.log(year2000)

//  way-02

 function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
const year2000=leapYear(2000);
 console.log(year2000)
