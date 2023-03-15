import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.log('Completed')
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')

    // const a = undefined;
    // a.name = 'Ange'

    subs.complete();

    subs.next('Hola')
    subs.next('Mundo')
});

// obs$.subscribe(
//     value => console.log('Next: ', value),
//     error => console.warn('Error: ', error),
//     () => console.log('Completed')
// );

obs$.subscribe(observer);