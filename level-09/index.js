const fruits = from(['apple', 'apple', 'banana', 'apple']);

fruits.pipe(skip(2)).subscribe(fruit => toConveyorBelt(fruit));
