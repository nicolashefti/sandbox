import {app} from "../app";

export const ADD_MOVIE = "MOVIE/ADD_MOVIE";

app.service('movieAction', class MovieActionsController {

    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    };

    addMovie(title) {
        this.$ngRedux.dispatch({
            type: ADD_MOVIE,
            value: title
        });
    }
});
