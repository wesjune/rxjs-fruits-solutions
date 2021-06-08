const fruits = from(['apple', 'apple', 'banana', 'apple', 'banana']);

fruits.pipe(skipLast(2)).subscribe(fruit => toConveyorBelt(fruit));
