'use client'

import React, { useEffect, useState, useContext } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { FotoContext } from "@/components/context/provContext";
import { createFoto, fetchPlaces, fetchYears } from "@/components/http/apiFoto";
import { observer } from "mobx-react-lite";
import { UploadButton } from "@/app/utils/uploadthing";
import Image from 'next/image';


const CreateFoto = observer(({ show, onHide }) => {
    const { foto } = useContext(FotoContext)
    const [url, setUrl] = useState('')




    useEffect(() => {
        fetchYears().then(data => foto.setYears(data))
        fetchPlaces().then(data => foto.setPlaces(data))
    }, [foto])


    const addFoto = () => {
        const placeId = foto.selectedPlace._id
        const yearId = foto.selectedYear._id
        createFoto(url, yearId, placeId)
        setUrl('')
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
                    Додати фото
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{foto.selectedPlace.name || "Виберіть місце"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {foto.places.map(place =>
                                <Dropdown.Item
                                    onClick={() => foto.setSelectedPlace(place)}
                                    key={place._id}
                                >
                                    {place.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{foto.selectedYear.date || "Виберіть рік"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {foto.years.map(year =>
                                <Dropdown.Item
                                    onClick={() => foto.setSelectedYear(year)}
                                    key={year._id}
                                >
                                    {year.date}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div>
                        < UploadButton endpoint='imageUploader'
                            onClientUploadComplete={(res) => {
                                setUrl(res[0].url)
                            }}
                            onUploadError={(error) => {
                                alert(`ERROR! ${error.message}`);
                            }} />

                        {url.length ? <div className="foto">
                            <Image src={url} alt='my image' width={300} height={200} />
                        </div> : null
                        }
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addFoto}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFoto;