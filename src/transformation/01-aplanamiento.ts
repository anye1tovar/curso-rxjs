import { fromEvent, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//Helper
const httpRequestLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        map<any, any>(res => res?.response?.token),
        catchError(err => of('xxx'))
    )


// Formularo
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Submit'

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    exhaustMap(httpRequestLogin)
);

submitForm$.subscribe(token => console.log(token));
