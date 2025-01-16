import React from "react"
import {Container, Row} from "react-bootstrap"

export const Footer: React.FC = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="footer-container text-white">
                    Copyright © 2025 
                </Row> 
            </Container>
        </footer>
    );
}