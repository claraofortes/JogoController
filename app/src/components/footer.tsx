import React from "react"
import { Outlet } from "react-router-dom"

export const Footer: React.FC = () => {
    return (
        <div>
            <p>Footer</p>
            <Outlet />
        </div>
    );
}