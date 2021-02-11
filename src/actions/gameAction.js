import axios from 'axios';
import { game_URL, rating_URL, latest_URL, name_URL } from '../api';

export const loadGame = () => async (dispatch) => {
    const gameData = await axios.get(game_URL);
    const ratingData = await axios.get(rating_URL);
    const latestData = await axios.get(latest_URL);
    const nameData = await axios.get(name_URL);

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            all: gameData.data.results,
            rating: ratingData.data.results,
            latest: latestData.data.results,
            name: nameData.data.results,
        }
    })
}