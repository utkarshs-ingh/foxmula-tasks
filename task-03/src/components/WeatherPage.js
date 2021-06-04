import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { weatherAPI } from '../actions/weatherAction'


function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(weatherAPI(city))
    }

    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Body>
        <Form onSubmit={submitHandler}>
                <Form.Group controlId='cityname'>
                    <Form.Control required type="text" placeholder="Enter City" value={city} onChange={e => setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }


export const WeatherPage = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { weatherStatus, error } = weatherData
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        {/* {error ? <h1>{error}</h1> : null} */}
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

        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    )
}

export default WeatherPage