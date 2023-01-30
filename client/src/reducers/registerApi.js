import axios from 'axios';

const GET_ERRORS = "GET_ERRORS";
const registerUser = (userData) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export default registerUser;