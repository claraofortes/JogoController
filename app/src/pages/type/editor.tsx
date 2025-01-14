import React from "react"
import { Outlet } from "react-router-dom"

export const TypeEditor: React.FC = () => {
    return (
        <div>
            <p>Type Editor</p>
            <Outlet />
        </div>
    );
}