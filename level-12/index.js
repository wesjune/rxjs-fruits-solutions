const fruits = from(['apple', 'apple', 'banana', 'apple', 'banana']);

fruits.pipe(takeLast(3)).subscribe(fruit => toConveyorBelt(fruit));
