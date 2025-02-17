"use client"

import { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import Link from 'next/link';


const NavBar = observer(() => {
    const [value, setValue] = useState('dark')

    const chengeTheme = () => {
        value === 'dark' ? setValue('light') : setValue('dark')
        document.body.className = value;

    }

    return (
        <Navbar bg="success" variant="dark">
            <Container className='d-flex justify-content-between align-items-center' style={{ color: '#9ACD32' }}>
                <Nav>
                    <Link style={{ color: '#0000CD', fontSize: '25px', fontWeight: 'bold' }} href={'/album'}>FOTO ALBUM</Link>
                </Nav>
                <Nav>

                    <Button
                        variant={"outline-light"}
                        className='m-1 mt-4'
                    // style={{ color: '#00FF00' }}

                    >
                        <Link href={'/admin'} style={{ fontWeight: 'bold' }}
                        >Адмін панель</Link>
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={chengeTheme}
                        className='m-1 mt-4'
                    // style={{ color: '#00FF00' }}
                    >
                        Тема
                    </Button>
                </Nav>
            </Container>
        </Navbar >

    );
});

export default NavBar;