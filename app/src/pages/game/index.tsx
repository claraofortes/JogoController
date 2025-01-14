import React from "react"
import { Outlet } from "react-router-dom"

export const Game: React.FC = () => {
    return (
        <div>
            <p>Game</p>
            <Outlet />
        </div>
    );
}