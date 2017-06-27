import {app} from "./app";

app.component('movieListContainer', {
    template: `<movie-list movies="$ctrl.movies"></movie-list>
    <movie-form on-add-movie="$ctrl.addMovie(title)"></movie-form>`,
    controller: class MovieListContainer {
        constructor($ngRedux, $scope) {

            let unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);

            $scope.$on('$destroy', unsubscribe);
        }

        mapStateToThis(state) {
            return {
                movies: state.movies
            };
        }

        addMovie(title) {
            console.log("Add movie in Container", title);
        }
    }
});
