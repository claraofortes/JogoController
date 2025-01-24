import React, {useEffect, useState} from "react"
import { Container, Tab, Tabs , Button, Form, Row, Col, Table, Dropdown} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faStar, faFilter} from "@fortawesome/free-solid-svg-icons";

const api = (window as any).api;

export const Platform: React.FC = () => {
    type platform = {
        id: number;
        name: string;
        password: string;
        username: string;
        id_user: string;
        connect: boolean;
    }

    const [platforms, setPlatforms] = useState<platform[]>([]);

    api.getAllPlatform().then((result: []) =>{
        var data : platform[] = []
        result.forEach(element =>{
            data.push(element as platform)
        })
        setPlatforms(data)
    }).catch(console.error);

    
    const body = document.querySelector<HTMLElement>('.body-page')
    const heigh = window.innerHeight - (document.getElementsByTagName('footer')[0]?.offsetHeight+document.getElementsByTagName('header')[0]?.offsetHeight+document.querySelector<HTMLElement>('.div-title-page')?.offsetHeight!)
    if(body){
        body.style.height = heigh.toString()+'px'
    }

    const goToGame = (id: number) =>{
        window.location.href = String(window.location.href).replace('/platform','') + '/game/' + id.toString()
    }

    return (
        <section className="platform-section">
            <Container fluid>
                <div className="div-title-page">
                    <h1 className="title-page">Plataformas</h1>
                    <Button variant="outline-light" className="button-new" href="/platform/0">Novo</Button>
                </div>
                <div className="body-page">
                    {platforms?.length > 0 ? (<Tabs defaultActiveKey="xbox"
                        id="platform-tab"
                        className="mb-3">
                        {platforms.map((platform) => 
                                <Tab eventKey={platform.id} title={platform.name} className="tab-content">
                                    <Row xs="auto" className="platorm-buttons justify-content-end align-items-center">
                                        <Col>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id={"switch-plataform-"+platform.id.toString() }
                                                    defaultChecked = {platform.connect}
                                                    disabled
                                                />
                                            </Form>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-light" href={"/platform/"+platform.id.toString()}><FontAwesomeIcon icon={faPenToSquare}/></Button>
                                        </Col>
                                    </Row>
                                        
                                    <Row>
                                        <Col xs={4} lg={2}>
                                            <div>
                                                <Table responsive>
                                                    <tbody>
                                                        <tr>
                                                            <td>Jogos</td>
                                                            <td>14</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Horas</td>
                                                            <td>120</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Finalizados</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Não Iniciados</td>
                                                            <td>2</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="filter-div">
                                                <Dropdown>
                                                    <Dropdown.Toggle >
                                                        <Row>
                                                            <Col>Filter</Col>
                                                            <Col><FontAwesomeIcon icon={faFilter}/></Col>
                                                        </Row>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu >
                                                    <Dropdown.Item eventKey="1">Aventura</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Ação</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">Simulação</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="games-content">
                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div" >
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(1)}/>
                                                    <div className="div-stars">
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>

                                                <div className="game-div">
                                                    <img src="/img/game_test.jpg" data-toggle="tooltip" data-placement="bottom" title="Don't Starve Together"
                                                        onClick={()=>goToGame(2)}/>
                                                    <div className="div-stars" >
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item star-select" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                        <FontAwesomeIcon className="stars-item" icon={faStar}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                        )}
                        </Tabs>)
                        :(null)
                    }
                </div>
            </Container>
        </section>
    );
}