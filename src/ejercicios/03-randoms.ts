import { Subject, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

  const subject$ = new Subject();

  reloj$.subscribe(subject$);
  
  // el subject es un tipo especial de observable que en este caso nos sirve para que
  // enviarlo como parametro observer en nuestro observable y haga emisiones cada que 
  // nuestro observer principal emita un valor, y en ese caso unificar los valores emitidos
  // y así todos lo que estan suscritos al subject va a tener los mismo valoes en cualquier tiempo

  // El subject nos ayuda a converitr nuestro coldo observable reloj, que emite la data dentro de
  // si mismo, a un hot observable, que en este caso es el subject que emite la data desde afuera de sí.
  
  // Estos dos observables deben de emitir exactamente los mismos valores
  subject$.subscribe( val => console.log('obs1', val) );
  subject$.subscribe( val => console.log('obs2', val) );





})();

		