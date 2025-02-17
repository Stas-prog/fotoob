import { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { FotoContext } from "./context/provContext";
import { Row } from "react-bootstrap";
import FotoItem from '@/components/fotoitem';
import FotoModal from '@/components/modals/fotoModal';

const FotoList = observer(() => {
    const { foto } = useContext(FotoContext)
    const [fotoVisible, setFotoVisible] = useState(false)

    const click = (imgo) => {
        setFotoVisible(true)
        foto.setSelectedFoto(imgo)
    }
    return (
        <>

            <Row className="d-flex">
                {foto.fotos.map(foto =>
                    <FotoItem key={foto._id} foto={foto} onClick={() => click(foto)} />
                )}
            </Row>
            <FotoModal show={fotoVisible} onHide={() => setFotoVisible(false)} />
        </>
    );
});

export default FotoList;