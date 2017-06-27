import {combineReducers} from "redux";
import {movies} from "./movies";
import {ADD_MOVIE} from "../action/movie-action";

const initialMovieList = [
    "Yolo contre attaque",
    "Les dents de ta mère"
];

export const reducers = combineReducers({
    movies: function movies(state = initialMovieList, action) {
        switch (action.type) {
            case ADD_MOVIE:
            default:
                return state;
        }
    }
});

