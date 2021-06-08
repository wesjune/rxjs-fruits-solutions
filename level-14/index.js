const apples = from([
  'apple',
  'dirty-apple',
  'apple',
  'old-apple',
  'old-apple',
]);

const bananas = from([
  'old-banana',
  'old-banana',
  'dirty-banana',
  'dirty-banana',
  'dirty-banana',
]);

const freshApples = apples.pipe(
  map(apple => apple.replace('dirty-', '').replace('old-', ''))
);

const freshBananas = bananas.pipe(
  map(banana => banana.replace('dirty-', '').replace('old-', ''))
);

merge(freshApples, freshBananas)
  .pipe(skip(2), skipLast(2))
  .subscribe(fruit => toConveyorBelt(fruit));
