import React from "react"
import { Outlet } from "react-router-dom"

export const GameEditor: React.FC = () => {
    return (
        <div>
            <p>Game Editor</p>
            <Outlet />
        </div>
    );
}