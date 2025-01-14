import React from "react"
import { Outlet } from "react-router-dom"

export const Platform: React.FC = () => {
    return (
        <div>
            <p>Platform</p>
            <Outlet />
        </div>
    );
}