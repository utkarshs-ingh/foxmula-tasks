import { WEATHER_DATA_SUCCESS, WEATHER_DATA_FAIL } from '../constant'
import axios from 'axios'


export const weatherAPI = (city) => async (dispatch) => {
    try {
        const config = {
            header: { 
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a631e386d2fc47702bcfd64f65d9fcb3&units=metric`, {}, config)
        dispatch({ type: WEATHER_DATA_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ 
            type: WEATHER_DATA_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}