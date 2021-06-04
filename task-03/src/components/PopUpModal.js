import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { weatherAPI } from '../actions/weatherAction'

export const PopUpModal = (props) => {
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