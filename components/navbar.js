"use client"

import { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import Link from 'next/link';


const NavBar = observer(() => {
    const [value, setValue] = useState('dark')

    useEffect(() => {
        document.body.className = value;
    }, [value])

    const chengeTheme = () => { value === 'dark' ? setValue('light') : setValue('dark') }

    return (
        <Navbar bg="primary" variant="dark">
            <Container className='d-flex justify-content-between align-items-center' style={{ color: '#9ACD32' }}>
                <Nav>
                    <Link style={{ color: '#FFC1DA', fontSize: '25px', fontWeight: 'bold' }} href={'/album'}>FOTO ALBUM</Link>
                </Nav>
                <Nav>

                    <Button
                        variant={"outline-dark"}
                        className='m-1 mt-4'                    >
                        <Link href={'/admin'} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#FFEB00' }}
                        ><span>Адмін панель</span></Link>
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={chengeTheme}
                        className='m-1 mt-4'                    >
                        Тема
                    </Button>
                </Nav>
            </Container>
        </Navbar >

    );
});

export default NavBar;