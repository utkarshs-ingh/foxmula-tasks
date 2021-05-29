import React from 'react'
import { useSelector } from 'react-redux'

export const DisplayCard = () => {
    const counter = useSelector(state => state.counter)
    const { count } = counter

    return (
        <h1>{count}</h1>
    )
}

export default DisplayCard