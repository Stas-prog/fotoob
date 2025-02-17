'use client'

import NavBar from '@/components/navbar'
import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreatePlace from "@/components/modals/createPlace";
import CreateYear from "@/components/modals/createYear";
import CreateFoto from "@/components/modals/createFoto";

const Admin = () => {
    const [placeVisible, setPlaceVisible] = useState('')
    const [yearVisible, setYearVisible] = useState('')
    const [fotoVisible, setFotoVisible] = useState('')

    return (
        <>
            <NavBar />
            <Container className="d-flex flex-column" >
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setYearVisible(true)}
                >
                    Додати рік
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setPlaceVisible(true)}
                >
                    Додати місце
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setFotoVisible(true)}
                >
                    Додати фото
                </Button>

                <CreatePlace show={placeVisible} onHide={() => setPlaceVisible(false)} />
                <CreateFoto show={fotoVisible} onHide={() => setFotoVisible(false)} />
                <CreateYear show={yearVisible} onHide={() => setYearVisible(false)} />
            </Container>
        </>
    );
};

export default Admin;