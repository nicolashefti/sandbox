/**
 * Code state after module 1
 */
// Limit the size of bundle by loading just what is needed!
// import {Observable} from "rxjs/Observable";
// import {Observer} from "rxjs/Observer";
// import "rxjs/add/observable/from";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter";

// Import everything (easier for development)
import {Observable, Observer} from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.from(numbers);

class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log(`complete`);
    }
}

// Observer: with a Class
source.subscribe(new MyObserver());

// Observer: passing functions
source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => {
        console.log(`complete`)
    }
);

// ######## ASYNC Generation, Operators
let newNumbers = [10, 50, 110];

let newSource: Observable<number> = Observable
    .create(observer => {
        let index = 0;
        let produceValue = () => {
            observer.next(newNumbers[index]);

            index++;
            if (index < numbers.length) {
                setTimeout(produceValue, 500);
            } else {
                observer.complete();
            }
        };

        produceValue();
    })
    // some Operators
    .map(n => n * 3)
    .filter(n => n > 49);

newSource.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => {
        console.log(`complete`)
    }
);

// flatMap operator
// let letters = Observable.from(['a', 'b', 'c']);
//
// let result = letters.flatMap(
//     x => Observable.interval(2000).map(i => x + i)
// );
//
// result.subscribe(x => console.log(x));
