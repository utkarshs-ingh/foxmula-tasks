import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { PopUpModal } from './PopUpModal'


export const WeatherPage = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { weatherStatus, error } = weatherData
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        {error ? <h1>{error}</h1> : weatherStatus.weather ? 
        <div>
            { weatherStatus.main.temp }  °C<br></br>
            { weatherStatus.weather.map(e => e.main) } <br></br> 
            { weatherStatus.name }, India <br/><br/>
        </div> 
        : <h1>Please Select a City</h1>} 
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Select City
        </Button>

        <PopUpModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    )
}

export default WeatherPage