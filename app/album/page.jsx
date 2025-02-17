"use client"

import NavBar from '@/components/navbar'
import { useContext, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YearBar from "@/components/yearbar";
import PlaceBar from "@/components/placebar";
import FotoList from "@/components/fotolist";
import { observer } from "mobx-react-lite";
import { fetchPlaces, fetchYears, fetchFotos } from "@/components/http/apiFoto";
import Pages from "@/components/pages";
import { FotoContext } from '@/components/context/provContext';



const Album = observer(() => {
    const { foto } = useContext(FotoContext)

    useEffect(() => {
        fetchPlaces().then(data => foto.setPlaces(data))
        fetchYears().then(data => foto.setYears(data))
        fetchFotos().then(data => { foto.setFotos(data) })
    }, [foto])

    useEffect(() => {
        fetchFotos(foto.selectedYear._id, foto.selectedPlace._id, foto.page, 12).then(data => {
            foto.setFotos(data)
        })
    }, [foto.selectedYear, foto.selectedPlace, foto.page, foto.limit])

    return (
        <>
            <NavBar />
            <Container className="ml-auto">
                <Row className="mt-2">
                    <Col md={1}>
                        <YearBar />
                    </Col>
                    <Col md={11}>
                        <PlaceBar />
                        <FotoList />
                        <Pages />
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Album;
