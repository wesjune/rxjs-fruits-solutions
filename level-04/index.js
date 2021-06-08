const fruits = from(['banana', 'banana', 'banana', 'banana']);

fruits.pipe(take(2)).subscribe(fruit => toConveyorBelt(fruit));
