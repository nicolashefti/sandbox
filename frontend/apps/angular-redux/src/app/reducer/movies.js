export default function movies(state = ["Yolo contre attaque", "Zombieland"], action) {
    switch (action.type) {
        case ADD_MOVIE:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
