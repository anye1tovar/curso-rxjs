import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.log('Completed')
};


const interval$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1000)
    return () => {
        clearInterval(intervalID); console.log('Interval destroyed');
    };
})

/*
* Casteo múltiple: muchas subscripciones sujetas al mismo observable
y así el observable distribuirá la misma información a todos sus subscriptores
* Tambies es un observer
* Se puden manejar el next, error y complete
*/

const subject$ = new Subject();

const intervalSubs = interval$.subscribe(subject$)

// const subs1 = interval$.subscribe(randomNumber => console.log('Subs 1: ', randomNumber));
// const subs2 = interval$.subscribe(randomNumber => console.log('Subs 2: ', randomNumber));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    intervalSubs.unsubscribe();
}, 3500);
