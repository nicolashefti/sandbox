import {app} from './app';

app.component('movieList', {
    template: '<ul><li ng-repeat="movie in $ctrl.movies">{{ movie }}</li></ul>',
    bindings: {
        movies: '<'
    },
    controller: class MovieListController {
    }
});
