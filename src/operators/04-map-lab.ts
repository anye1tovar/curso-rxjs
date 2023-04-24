import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero tortor. In hac habitasse platea dictumst. Proin non iaculis mauris. Aenean blandit rutrum urna eu ullamcorper. Curabitur posuere maximus consectetur. Pellentesque eleifend tortor eros, at vestibulum odio pellentesque id. Integer et commodo augue. Duis rhoncus condimentum facilisis. Proin porttitor, nibh ac consequat accumsan, ipsum urna auctor lorem, ac congue dui diam a ligula. Nullam rutrum augue sit amet nunc eleifend, sed hendrerit ipsum porttitor. Mauris urna ex, accumsan eget condimentum non, iaculis non lorem. Phasellus in velit nec ligula accumsan pellentesque at id urna. Praesent dapibus vehicula libero. Nulla egestas aliquet urna, a posuere mauris dapibus vel. Curabitur vitae nunc non quam placerat molestie quis eget nunc. Aliquam rutrum non neque a vestibulum.
<br/><br/>
Mauris in imperdiet sapien. Nullam bibendum elit ipsum, in eleifend velit aliquam at. Suspendisse eget sem a est lobortis porttitor id a diam. Morbi ullamcorper risus ex. Vivamus efficitur sapien magna, ac mattis sem euismod ut. Donec vel imperdiet odio. Maecenas id enim neque. Praesent porta laoreet turpis ac scelerisque. In ullamcorper ipsum sit amet suscipit convallis. Duis rutrum eros vel leo faucibus ultricies.
<br/><br/>
Suspendisse velit enim, suscipit non ultricies eu, congue quis dolor. Phasellus et blandit eros. Vestibulum eget maximus ex. Vivamus posuere pharetra orci, id sollicitudin lacus placerat quis. Duis varius dictum tempus. Nam non felis non diam tincidunt tincidunt vel tempor sem. Vivamus facilisis sapien sapien, in venenatis enim efficitur vel. Donec accumsan risus at fermentum lobortis. Sed magna magna, dictum quis felis vitae, pulvinar ultrices tellus. Nam suscipit ornare dui a ullamcorper. Donec varius posuere fringilla. Suspendisse eu elit euismod, ultrices massa at, hendrerit mauris. Morbi semper fringilla magna, id elementum nisi vulputate sit amet. Mauris vel lorem nisl.
<br/><br/>
Sed aliquet tristique dolor at gravida. Vivamus interdum pharetra metus at posuere. Sed vestibulum est metus, efficitur pellentesque libero ornare non. Suspendisse ut interdum nulla. Fusce condimentum sollicitudin justo in euismod. Donec fermentum vulputate dui, ut pretium nisi volutpat ut. Pellentesque convallis nisi lacus, a sodales tortor interdum in. Vestibulum vestibulum fringilla laoreet. Mauris eget magna et dui pharetra vulputate et quis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lacinia, magna non aliquet condimentum, sapien sem pulvinar sapien, nec ornare justo erat at tellus.
<br/><br/>
Maecenas mollis ipsum vitae dictum pretium. Aenean quis gravida nulla. Aenean erat metus, pellentesque eget pharetra ac, pulvinar tincidunt felis. Integer eleifend dictum viverra. Morbi sed arcu mi. Maecenas et accumsan orci, ac faucibus neque. Maecenas a facilisis libero, eget ultrices justo. Proin a purus id leo lobortis viverra. Phasellus faucibus euismod justo nec ullamcorper. Nulla auctor arcu a consectetur sodales.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que hace el calculo del scroll
const calculateScrollPercentage = (event) => {
    const { scrollTop, scrollHeight, clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight) * 100);

}

// Streams

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calculateScrollPercentage(event))
    map(calculateScrollPercentage),
    tap(console.log)
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
})
