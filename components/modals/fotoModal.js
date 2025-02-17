"use client"

import { useContext } from 'react';
import Image from 'next/image'
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { FotoContext } from "@/components/context/provContext";
import { observer } from 'mobx-react-lite';

const FotoModal = observer(({ show, onHide }) => {
    const { foto } = useContext(FotoContext)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{ background: 'Orchid' }}
        >

            <Modal.Body style={{ background: 'CornflowerBlue' }}>
                <Container className="mt-3">
                    <Image src={foto.selectedFoto.img} alt='my image' width={450} height={500} style={{ objectFit: 'contain' }} />
                </Container>
            </Modal.Body>
            <Modal.Footer style={{ background: 'CornflowerBlue' }}>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
}
)
export default FotoModal;
