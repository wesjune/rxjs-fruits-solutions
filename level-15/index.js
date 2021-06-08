const apples = from(['apple', 'apple']);
const bananas = from(['banana', 'banana']);

zip(apples, bananas)
  .pipe(concatMap(fruit => fruit))
  .subscribe(fruit => toConveyorBelt(fruit));
