"use client"

import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createPlace } from "@/components/http/apiFoto";

const CreatePlace = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addPlace = () => {
        createPlace(value)
        setValue('')
        onHide()

    }
   
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати місце
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть місце події"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addPlace}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePlace;