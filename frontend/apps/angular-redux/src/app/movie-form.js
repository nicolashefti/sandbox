import {app} from "./app";

app.component('movieForm', {
    template: `<input type="text" placeholder="New movie title" ng-model="movieTitle">
        <button ng-click="$ctrl.addMovie(movieTitle)">Add</button>`,
    bindings: {
        onAddMovie: '&'
    },
    controller: class MovieFormController {
        addMovie(title) {
            this.onAddMovie({title: title});
        }
    }
});
