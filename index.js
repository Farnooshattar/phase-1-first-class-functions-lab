const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=function(arr)
{
    return (arr.slice(0,2))
}
const returnLastTwoDrivers=function(arr)
{
   return (arr.slice((arr.length-2),arr.length))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    }
  }
 
  const fareDoubler = createFareMultiplier(2);
  const fareTripler=  createFareMultiplier(3);
  function selectDifferentDrivers(arr,returnDrivers)
  {
    return returnDrivers(arr)
  }
