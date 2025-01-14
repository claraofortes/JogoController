import React from "react"
import { Outlet } from "react-router-dom"

export const Type: React.FC = () => {
    return (
        <div>
            <p>Type</p>
            <Outlet />
        </div>
    );
}