import React, {useState} from "react"
import { Form, Button, Container, Row, Col} from "react-bootstrap";
import {useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";


const api = (window as any).api;

export const PlatformEditor: React.FC = () => {
    type platform = {
        id: number;
        name: string;
        password: string;
        username: string;
        id_user: string;
        connect: boolean;
    }

    const [platforms, setPlatform] = useState<platform>({
        id: 0,
        name: '',
        password: '',
        username: '',
        id_user: '',
        connect: false
    });
    const id =  Number(useParams().id);
    if (id != 0 ){
        api.getPlatformById(id).then((result: object) =>{
            var data : platform = result as platform
            setPlatform(data)
        }).catch(console.error);
    }
    return (
        <section className="platform-edit-section">
            <Container fluid>
                <div className="div-title-page">
                    <h1 className="title-page">{platforms?.name!=''? ('Edite Plataforma '+platforms.name): 'Nova Plaraforma'}</h1>
                    <Button variant="outline-light" href={"/platform"}><FontAwesomeIcon icon={faArrowRotateLeft}/></Button>
                </div>
                <div className="body-page">
                    <Form>
                        <Row>
                            <Col xs={8}>
                                <Form.Group  className="mb-3" controlId="formNamePlatform">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control defaultValue={platforms?.name} placeholder="Novo nome"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formNamePlatform">
                                    <Form.Label>Conexão</Form.Label>
                                    <Form.Check
                                        type="switch"
                                        id="form-switch-connect"
                                        defaultChecked = {platforms?.connect}
                                    />
                                </Form.Group>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formNamePlatform">
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control defaultValue={platforms?.username} placeholder="Novo usuário"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formNamePlatform">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" defaultValue={platforms?.password} placeholder="Nova senha"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formNamePlatform">
                                    <Form.Label>Id do Usuário</Form.Label>
                                    <Form.Control defaultValue={platforms?.id_user} placeholder="Novo id de usuário"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit"> Salvar</Button>
                    </Form>
                </div>
            </Container>
        </section>
    );
}