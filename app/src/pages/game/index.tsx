import React from "react"
import { Container, Button} from "react-bootstrap";

export const Game: React.FC = () => {
    return (
        <section className="game-section">
            <Container fluid>
                <h1 className="title-page">Jogos</h1>
                <Button variant="outline-light" className="button-new" href="/game/0">Novo</Button>
                <div className="body-page"></div>
            </Container>
        </section>
    );
}