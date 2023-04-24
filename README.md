# Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

# Notas del curso

Programación Reactiva (ReactiveX -RxJs)


El fin principal el obtener la información en tiempo real.

Cuando usar extensiones reactivas:
    • Eventos en la interfaz
    • Notificacion de cambios en algun objeto
    • Comuniacion por sockets (osea que hay que esperar su resultado por un tiempo)
    • Flujos de información (como streams)

OBSERVABLES
    • Son la fuente de la informacion
    • Emiten uno o mas valores
    • Son finitos o infinitos
    • Pueden emiti errores
    • Sincronos o asincronos
SUBSCRIBERS
    • Estan pendientes de lo que hace un observable (se suscriben a él)
    • Consumen la data del observable
    • Reciben los errores y eventos del obsevable
    • Desconocen todo lo que hay detras del observable
OPERATORS (emisor: $)
    • Transforman los obserbavles (map, group…)
    • Filtran los observables (filter, distinct…)
    • Combinan observables
    • Crean nuevos observables


Programación funcional: crear un conjunto de funciones con un objetivo específico, es decir, si tengo una funcion que recibo A y retorna A +1, siempre que se llame retornará A + 1, sin efectos secundarios ni mutación de los datos (osea los datos no tienen el problema de que se modifican por ser enviados o definidos por referencia).

#SUBJECT

* Casteo múltiple: muchas subscripciones sujetas al mismo observable y así el observable distribuirá la misma información a todos sus subscriptores
* También es un observer
* Se puden manejar el next, error y complete

#Cold observable
Se llama así cuando la data es producida por si mismo.

#Hot Observable
Se llama sí cuando la data es producida fuera del observable (por ejemplo cuando usamos un subject)


## Operadores en ReactiveX

¿Que son los operadores?

Reciben información y emiten la salida que se necesita para poder realizar un tr{abajo en específico. Al operador no le interesa de donde viene la información. Metodos para procesar la informacion que fluye a travez de un observable

Map

Nos permite transformar la información en lo que necesitemos. Puede trabajar con cualquier tipo de dato y emitir tambien cualquier tipo de dato diferente.

Pluck

Permite obtener directamente una propiedad específica del objeto que viene en el observable
pluck(‘key’) que es como response,key o pluck(‘target’, ‘url’) que es como response.target.url

MapTo

Permite transformar la entrada en una salida constante específicada (una salida con el mismo valor para cualquier entrada)

Filter

Permite filtrar las emisiones de los valores que emite el observable

Encadenamiento de operadores

pipe(map, filter,..) se ejuecutan en el orden es que los escribamos, y el siguietne siempre trabaja con la salida del anterior

tap
Permite disparar acciones secundarias cuando la información pasa a través del observable. Se ejecuta antes de que se ejecute el subscribe. Nos ayuda a depurar ya que nos permite ver como fluye la informacion a través de los operadores

reduce

Permite aplicar una funcion acumuladora a las emisiones producidas por el observable

scan

Permite aplicar una funcion acumuladora a las emisiones del observable pero va respondiendo el acumulado a medida que se van generando entradas del observable.

Take

Sirve para limitar la cantidad de emisiones del observable
First

Toma el primer elemento arrojado por el observable, o toma el primer elemento que cumpla la condicion dada

TakeWhile

Permite recibir valores mientras la condición se cumpla. Inclusive: nos sirve para obtener el ultimo valor por el que se completó el observable

TakeUntil

Recibe y emite valores hasta que el segundo boservable (que se le da en el parametro) emita su primer valor

Skip

Pemite omitir la salida de las primeras n emisiones del observable

Distinct

No permite pasar valores de emisiones que ya se hayan emitido antes.

DisctinctUntilChanged

No emite el valor si es igual (===) al anterior valor emitido.

DisctinctUntilKeyChanged

No emite el valor si la propiedad que estamos monitoreando es igual (===) a la del anterior valor emitido.

DebounceTime

Para contar cuantas milesimas de segundos ha pasado desde la ultima emisión, y si esas milesimas de segundo sobrepasan el valos que le hemos dado, entonces se emitirá dicho valor. Nos ayuda a restringir la cantidad de emisiones que nuestro observable nos da en un tiempo.

ThrottleTime

Para contar cuantas milesimas de segundos ha pasado desde la ultima salida y así dejar salir valores cada que se cumpla ese tiempo

SampleTime

Permite obtener el ultimo valor emitido en un intervalo de tiempo (si no se emite anda en ese intervalo entonces no emite nada). Pendiente de cada una de sus emisiones en periodos de tiempo.

Sample

El ultimo valor de mi observable se emite cada que el segundo observable emita un evento.

AuditTime

Emitir el ultimo valor que ha sido emitido por el obsergvable en un periodo de tiempo determinado.

CatchError

Para atrapar cualquier error que venga en el observable


## Operadores de transformación

mergeAll

Cuando un observable devuelve en la salida otro observable, entonces usamos mergeAll para que se suscriba a todos los observables devueltos y así en nuestra salida final se muestren los valores finales de los observables.

MergeMap

funciona como el mergeAll conbinado con el map, cuando un map devuelve un obserbable, enmtonce se puede usar mergemap en lugar del map para de una vez suscribirse a ese observable en el mismo operador y emitir el valor final (Mantiene todas las suscripciones internas activas)

SwitchMap

Se suscribe a los observables que se van generando con las nuevas emisiones de nuestro observable pricipal, pero cada que se genera uno nuevo, en anterior se completa, de esta forma solo dando la respuesta del ultimo observable emitido. (Solo mantiene una suscripcion interna activa)

ConcatMap

Concatena los observables que peudan fluir a travez del operador. Lo concatena al ultimo valor emitido cuando el observable se completa, es decir, el seguiente observable no se va a ejecutar hasta que el anterior emitido se haya completado. Se completa cuando no existan más observables sin completar dentro del concatMap.

ExhaustMap

Ignora los observables que puesan surgir dentro del operador mientras tenga una suscripción interna con un observable activo. Solo mantiene una suscripción activa antes de poder añadir otra suscripción para que los valores.


## Operadores y métodos de combinación

StartWith

Nos permite hacer una emision antes de que el observable empiece a emitir su primer valor. Recibe cualquier tipo de argumento, inclusive otro observable.

EndWith

Nos permite hacer una emisión justo antes de que se complete el observable como último valor.

Concat

Es una funcion que recibe observables, iterables o argumentos, con los cuales crea un nuevo observable. Los observable se ejecutan en orden cuando el justo anterior se complete.

Merge

Es una funcion que recibe uno o más observables y el resultado va a ser el producto de los observables combinados simultaneamente. La suscripcion se completa cuando todos los observables se hayan completado.

CombineLatest

Es una funcion que nos permite mandar observables como argumentos, combinarlos y emitir los valores de todos los observables internos simultaneamente. La salida es un arreglo con los últimos valores emitidos por cada uno de los observables internos, cada que uno haga una emision, se da una salida con el arreglo de los últimos valores que ha sido emitidos por cada uno.

ForkJoin

Es una funcion que recibe varios observables como argumentos, estos observables deben ser finitos, ya que el forkJoin va a retornar el valor de los observables cuando todos se hayan completado, el valor de todos los observables sera emitido como un arreglo. Ese arreglo se compone del ultimo valor emitido por cada observable.



