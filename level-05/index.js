const fruits = from([
  'apple',
  'apple',
  'old-apple',
  'apple',
  'old-apple',
  'banana',
  'old-banana',
  'old-banana',
  'banana',
  'banana',
]);

fruits
  .pipe(filter(fruit => !fruit.includes('old')))
  .subscribe(fruit => toConveyorBelt(fruit));
