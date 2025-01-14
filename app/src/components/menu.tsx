import React from "react"
import { Outlet } from "react-router-dom"

export const Menu: React.FC = () => {
    return (
        <div>
            <p>Menu</p>
            <Outlet />
        </div>
    );
}