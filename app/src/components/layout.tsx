import React from "react"
import { Outlet } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


export const Layout: React.FC = () => {
    return (
        <div>
            <p>This is our layout</p>
            <ul>
            <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
            </ul>
            <Button>Teste de Botão</Button>
            <Outlet />
        </div>
    );
}