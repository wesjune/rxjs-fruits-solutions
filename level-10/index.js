const fruits = from([
  'dirty-apple',
  'apple',
  'dirty-banana',
  'dirty-banana',
  'apple',
]);

fruits
  .pipe(
    skip(2),
    take(1),
    map(fruit => fruit.replace('dirty-', ''))
  )
  .subscribe(fruit => toConveyorBelt(fruit));
