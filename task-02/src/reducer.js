import { WEATHER_DATA_REQUEST, WEATHER_DATA_RESET } from './constant'

export const weatherDataReducer = (state = { weatherStatus: [] }, action) => {
    switch (action.type) {
		case WEATHER_DATA_REQUEST:
			return { weatherStatus: action.payload };
		case WEATHER_DATA_RESET:
			return { weatherStatus: [] };
		default:
			return state;
	}
}

export default weatherDataReducer