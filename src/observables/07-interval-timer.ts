import { interval, timer } from 'rxjs'

const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('Completed')
};


const dateTimer = new Date();
dateTimer.setSeconds(dateTimer.getSeconds() + 5)

const interval$ = interval(1000)


const timer$ = timer(2000); //Que inicia el 2 segundos
const timer2$ = timer(2000, 1000); // Que el intervalo de 1000ms inicia en 2 seg
const timer3$ = timer(0);

const timer4$ = timer(dateTimer); //Para programar en que momento(fecha) se ejecutará el timer

console.log('Start');

// interval$.subscribe(observer)
timer4$.subscribe(observer)

console.log('End');
