import { WEATHER_DATA_SUCCESS, WEATHER_DATA_FAIL } from './constant'

export const weatherDataReducer = (state = { weatherStatus: [] }, action) => {
    switch (action.type) {
		case WEATHER_DATA_SUCCESS:
			return { weatherStatus: action.payload };
		case WEATHER_DATA_FAIL:
			return { error: action.payload };
		default:
			return state;
	}
}

export default weatherDataReducer