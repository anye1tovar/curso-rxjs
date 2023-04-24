import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUN_API_URL = "https://api.github.com/users";
const GITHUB_USER = "anye1tovar"

forkJoin({
    usuario: ajax.getJSON(`${GITHUN_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUN_API_URL}/${GITHUB_USER}/repos`)
        .pipe(catchError(err => of([]))),
    gists: ajax.getJSON(`${GITHUN_API_URL}/${GITHUB_USER}/gists`),
}).pipe(catchError(err => of(err.message))).subscribe(console.log)