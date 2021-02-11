const initial = {
    all: [],
    rating: [],
    latest: [],
    name: []
}

const gameReducer = (state = initial, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                all: action.payload.all,
                rating: action.payload.rating,
                latest: action.payload.latest,
                name: action.payload.name
            };
        default:
            return {
                ...state
            }
    }
}

export default gameReducer;