const fruits = from(['apple']);

fruits.pipe(repeat(3)).subscribe(fruit => toConveyorBelt(fruit));
