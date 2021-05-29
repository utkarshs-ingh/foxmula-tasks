import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../incrementCounter'

export const ClickButton = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(increment())}>click me</button>
    )
}

export default ClickButton