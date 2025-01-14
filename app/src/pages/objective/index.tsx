import React from "react"
import { Outlet } from "react-router-dom"

export const Objective: React.FC = () => {
    return (
        <div>
            <p>Objective</p>
            <Outlet />
        </div>
    );
}