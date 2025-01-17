import React from "react"
import { Container, Button} from "react-bootstrap";

export const Objective: React.FC = () => {
    return (
        <section className="objective-section">
            <Container fluid>
                <h1 className="title-page">Objetivos</h1>
                <Button variant="outline-light" className="button-new" href="/objective/0">Novo</Button>
                <div className="body-page"></div>
            </Container>
        </section>
    );
}