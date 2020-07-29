const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
// const carsByMake: string[][] = [];

// Help with inference when extracting values
// const car = carMakers[0];
// const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | String)[] = [new Date()];
importantDates.push('2020-10-10');
importantDates.push(new Date());
