import React from "react"
import { Container, Button} from "react-bootstrap";

export const Type: React.FC = () => {
    return (
        <section className="type-section">
            <Container fluid>
                <h1 className="title-page">Gêneros e Tipos</h1>
                <Button variant="outline-light" className="button-new" href="/type/0">Novo</Button>
                <div className="body-page"></div>
            </Container>
        </section>
    );
}