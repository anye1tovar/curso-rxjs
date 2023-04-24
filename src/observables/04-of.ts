import { of } from 'rxjs'

//const obs$ = of(1, 2, 3, 4, 5, 6);


const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve());

console.log('Init');
obs$.subscribe(
    next => console.log('Next: ' + next),
    null,
    () => console.log('Sequence finished')
);
console.log('End');
