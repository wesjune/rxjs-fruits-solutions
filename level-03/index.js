const fruits = from(['apple', 'apple', 'banana', 'apple']);

fruits.pipe(distinct()).subscribe(fruit => toConveyorBelt(fruit));
