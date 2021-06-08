const fruits = from(['old-banana', 'apple', 'dirty-banana', 'apple']);

fruits
  .pipe(
    filter(fruit => !fruit.includes('old')),
    map(fruit => fruit.replace('dirty-', '')),
    take(2)
  )
  .subscribe(fruit => toConveyorBelt(fruit));
