const apples = from(['apple', 'apple', 'old-apple', 'apple', 'old-apple']);

const bananas = from([
  'banana',
  'old-banana',
  'old-banana',
  'banana',
  'banana',
]);

merge(apples, bananas)
  .pipe(filter(fruit => !fruit.includes('old')))
  .subscribe(fruit => toConveyorBelt(fruit));
