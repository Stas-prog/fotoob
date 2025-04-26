import { Card, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { deleteFoto } from '@/components/http/apiFoto';
import { observer } from 'mobx-react-lite'

const FotoItem = observer(({ onClick, foto }) => {
    const removeFoto = async () => { await deleteFoto(foto._id) }
    return (
        <Col md={3} className={"mt-3"} >
            <Card style={{ width: 220, cursor: 'pointer', backgroundColor: '#AFDDFF' }} border={"light"}>
                <Image style={{ objectFit: 'contain' }} onClick={onClick} width={215} height={190} src={foto.img} alt='tyur' />
                <Button style={{ width: 2, height: 2, backgroundColor: '#9ACBD0', border: 'none' }} onClick={removeFoto}></Button>
            </Card>
        </Col>
    );
});

export default FotoItem;
