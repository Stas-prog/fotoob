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
            style={{ background: '#FFF8F8' }}
        >

            <Modal.Body style={{ background: '#F5EEDD' }}>
                <Container className="mt-3">
                    <Image src={foto.selectedFoto.img} alt='my image' width={450} height={500} style={{ objectFit: 'contain' }} className='tref' />
                </Container>
            </Modal.Body>
            <Modal.Footer style={{ background: '#F5EEDD' }}>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
}
)
export default FotoModal;
