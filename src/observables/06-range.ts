import { asyncScheduler, of, range } from 'rxjs'

// Range: emite una secuencia de numeros en base a un rango

const src$ = range(1, 5, asyncScheduler)

console.log('Start');

src$.subscribe(console.log);

console.log('End');
