const fruits = from(['banana', 'apple', 'apple', 'banana', 'banana']);

fruits.pipe(distinctUntilChanged()).subscribe(fruit => toConveyorBelt(fruit));
