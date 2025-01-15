import React, { useEffect, useState } from "react"

import {Nav, Navbar} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGamepad, faCheckToSlot, faChartDiagram, faDesktop, faMinus, faClose} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize, faWindowRestore} from "@fortawesome/free-regular-svg-icons";

const ipcRenderer = (window as any).ipcRenderer;

export const Header: React.FC = () => {
    const [gameMenu, setGameMenu] = useState(false);
    const [platformMenu, setPlatformMenu] = useState(false);
    const [homeMenu, setHomeMenu] = useState(false);
    const [typeMenu, setTypeMenu] = useState(false);
    const [objectiveMenu, setObjectiveMenu] = useState(false);

    const [maximizeToggle, setMaximizeToggle] = useState(true);
    const [fullscreenToggle, setFullscreenToggle] = useState(false);

    const closeApp = () => {
        ipcRenderer.send('manualClose', [])
    }
    const minimizeApp = () =>{
        ipcRenderer.send('manualMinimize', [])
    }
    const maximizeApp = () =>{
        ipcRenderer.send('manualMaximize', maximizeToggle);
        setMaximizeToggle(!maximizeToggle);
    }


    useEffect(()=>{
        window.addEventListener("resize",()=>{
            var isAtMaxWidth = (window.screen.availWidth - window.innerWidth === 0) && (window.screen.availHeight - window.innerHeight === 0)
            var isFullscreen = (window.screen.availWidth - window.innerWidth === 0) && (window.screen.availHeight - window.innerHeight  <  0);

            if(!isFullscreen){
                setFullscreenToggle(false);
                if(isAtMaxWidth){
                    setMaximizeToggle(true);
                }else{
                    setMaximizeToggle(false);
                }
            }else{ 
                setFullscreenToggle(true);
            }
        });

        

        var urlAtual = window.location.href;
        if(urlAtual.indexOf('/game') !== -1){
            setGameMenu(true);
        } else if (urlAtual.indexOf('/platform') !== -1){
            setPlatformMenu(true);
        } else if (urlAtual.indexOf('/type') !== -1){
            setTypeMenu(true);
        } else if (urlAtual.indexOf('/objective') !== -1){
            setObjectiveMenu(true);
        } else{
            setHomeMenu(true);
        }
    },[])
    
    return (
        <header>
            <Navbar className="bg-body-tertiary nav-bar">
                <Navbar.Brand href="/" className="nav-bar-brand">
                    <img alt="logo" src="/img/icone.png" width="25" height="25" className="d-inline-block " />{' '}
                    Jogo Controller
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                <Nav className="me-auto">
                    <Nav.Link href="/" data-toggle="tooltip" data-placement="bottom" title="Home" className= {homeMenu ? 'select-menu' : ''}><FontAwesomeIcon icon={faHouse} /></Nav.Link>
                    <Nav.Link href="/game" data-toggle="tooltip" data-placement="bottom" title="Jogos" className= {gameMenu ? 'select-menu' : ''}><FontAwesomeIcon icon={faGamepad} /></Nav.Link>
                    <Nav.Link href="/platform" data-toggle="tooltip" data-placement="bottom" title="Plataformas" className= {platformMenu ? 'select-menu' : ''}><FontAwesomeIcon icon={faDesktop} /></Nav.Link>
                    <Nav.Link href="/type" data-toggle="tooltip" data-placement="bottom" title="Gêneros e Tipos" className= {typeMenu ? 'select-menu' : ''}><FontAwesomeIcon icon={faChartDiagram} /></Nav.Link>
                    <Nav.Link href="/objective" data-toggle="tooltip" data-placement="bottom" title="Objetivos" className= {objectiveMenu ? 'select-menu' : ''}><FontAwesomeIcon icon={faCheckToSlot} /></Nav.Link>
                </Nav>
                <Nav className = "flex-row">
                    <Nav.Link href="#" onClick={minimizeApp}><FontAwesomeIcon icon={faMinus} /></Nav.Link>
                    {!fullscreenToggle ? (<Nav.Link href="#" id="maximize-id" onClick={maximizeApp}>{maximizeToggle ? (<FontAwesomeIcon icon={faWindowRestore}/>) : (<FontAwesomeIcon icon={faWindowMaximize} />)}</Nav.Link>) : null}
                    <Nav.Link href="#" className='close-button'onClick={closeApp}><FontAwesomeIcon icon={faClose} /></Nav.Link>
                </Nav>
            </Navbar>
        </header>
    );
}