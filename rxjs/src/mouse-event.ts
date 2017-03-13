// Import everything (easier for development)
import {Observable} from "rxjs";

let circle = document.getElementById('circle');
let source = Observable.fromEvent(document, 'mousemove')
    .map((e: MouseEvent) => {
            return {
                x: e.clientX,
                y: e.clientY,
            }
        }
    )
    .filter(value => value.x < 500)
    .delay(300);

function onNext(value) {
    circle.style.left = value.x + "px";
    circle.style.top = value.y + "px";
    console.log(value, circle.style.left, circle.style.top);
}

// Observer: passing functions
source.subscribe(
    onNext,
    e => console.log(`error: ${e}`),
    () => {
        console.log(`complete`)
    }
);
