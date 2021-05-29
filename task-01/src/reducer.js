import { COUNTER_INCREMENT, COUNTER_RESET } from './constant'

export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
		case COUNTER_INCREMENT:
			return { count: state.count + 1 };
		case COUNTER_RESET:
			return { count: 0 };
		default:
			return state;
	}
}

export default counterReducer