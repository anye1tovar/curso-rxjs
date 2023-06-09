import { fromEvent } from 'rxjs'

// Eventos del DOM

const src1$ = fromEvent<PointerEvent>(document, 'click')
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
    next: (next) => console.log('next: ', next)
}

src1$.subscribe(({ x, y }) => {
    console.log(x, y);

});
src2$.subscribe(event => {
    console.log(event.key);

});