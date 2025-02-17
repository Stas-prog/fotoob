"use client"

import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { FotoContext } from "./context/provContext"
import { Card, Row } from "react-bootstrap";

const PlaceBar = observer(({ places }) => {
    const { foto } = useContext(FotoContext)
    console.log(foto)
    return (
        <Row className="d-flex">
            {foto.places.map(place =>
                <Card
                    style={{ cursor: 'pointer', width: 100, margin: 5, backgroundColor: '#1E90FF', color: '#FFFF00', fontWeight: 'bold' }}
                    key={place._id}
                    className="place p-3 d-flex justify-content-center align-items-center"
                    onClick={() => foto.setSelectedPlace(place)}
                    border={place._id === foto.selectedPlace._id ? 'danger' : 'light'}
                >
                    {place.name}
                </Card>
            )
            }
        </Row >
    );
});

export default PlaceBar;