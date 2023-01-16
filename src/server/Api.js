
import axios from "axios";

export const useGetApi = async (endpoint) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL + endpoint);
        return {
            'error': false,
            'data': res.data
        }

    } catch (error) {
        if (error.response) {
            return {
                'error': true,
                'message': error.response.data.message
            }
        }
    }
}

export const usePostApi = async (endpoint, params) => {
    console.log(params)
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL + endpoint, params);
        return {
            'error': false,
            'data': res.data.values[0]
        }

    } catch (error) {
        if (error.response) {
            return {
                'error': true,
                'message': error.response.data.message
            }
        }
    }
}