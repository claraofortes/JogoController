import React from "react"
import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
    const closedClick = () =>{
        window.close();
    }
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <img alt='logo' src='./img/icone.png'></img>
                        <p>Jogo Controller</p>
                    </Col>
                    <Col>
                       <FontAwesomeIcon icon={faX} onClick={()=>closedClick()}/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}