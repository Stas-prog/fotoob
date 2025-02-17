"use client"

import { useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation"


const Main = observer(() => {
    const [password, setPassword] = useState('')
    const router = useRouter()
    const click = () => {
        if (password === 'zxcvb') {
            router.push('/album')
        } else {
            setPassword('')
        }
    }

    return (
        <div className='main'>
            <Container className="d-flex justify-content-center align-items-center">
                <Card style={{ width: 600, marginTop: 130 }} className="p-5">
                    <Form className="d-flex">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введіть ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />

                        <Button
                            variant={"outline-success"}
                            style={{ width: 120, hight: 5, marginLeft: 15 }}
                            onClick={click}
                        >Enter
                        </Button>
                    </Form>
                </Card>
            </Container >
        </div>
    );
});

export default Main;

