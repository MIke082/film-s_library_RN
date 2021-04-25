import axios from 'axios';

export const url = `https://api.themoviedb.org/3/movie/popular?api_key=aedec762108947522479760f7a28ab7f`;

export const getData = (data) => {
    return {
        type: 'GET_LIST',
        payload: data
    }
}

export const getDataCreater = () => {
    return (dispatch => {
        return axios.get(`${url}`
        )
            .then(response => dispatch(getData(response.data.results)))
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    })
}

export const AddFavorite = (film) => {
    return {
        type: 'ADD_FAVORITE',
        payload: film
    }
}

export const RemoveFromFavorite = (film) => {
    console.log('action', film);
    return {
        type: 'REMOVE_FAVORITE',
        payload: film
    }
}

