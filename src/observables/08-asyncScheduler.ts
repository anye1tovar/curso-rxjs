import { asyncScheduler } from 'rxjs'

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Ange')


const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000)

}, 3000, 0)

// setTimeout(() => {
//     subs.unsubscribe()
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000)
