import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.log('Completed')
};

const interval$ = new Observable<number>(subs => {
    let cont: number = 0;
    const interval = setInterval(() => {
        cont++
        subs.next(cont)
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    // Perocedimiento ejecutado cuando se hace unsubscribe
    return () => {
        clearInterval(interval);
        console.log('Interval destroyed');

    }
})

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1
    .add(subscription2.add(subscription3))


setTimeout(() => {
    subscription1.unsubscribe()
    console.log('Timeout completed');

}, 6000);
