import { COUNTER_INCREMENT, COUNTER_RESET } from "./constant"

export const increment = () => async(dispatch) => {
    try {       
        dispatch({ type: COUNTER_INCREMENT })   
    } catch (error) {
        dispatch({ 
            type: COUNTER_RESET, 
        })
    }
}