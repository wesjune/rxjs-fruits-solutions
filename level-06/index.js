const fruits = from(['dirty-apple', 'apple', 'dirty-banana', 'banana']);

fruits
  .pipe(map(fruit => fruit.replace('dirty-', '')))
  .subscribe(fruit => toConveyorBelt(fruit));
